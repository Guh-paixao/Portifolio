'use client';
import { useEffect, useState, useRef, useCallback } from "react";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string | null;
}

export default function RepoList() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef<IntersectionObserver | null>(null);

    const lastRepoRef = useCallback((node: HTMLDivElement | null) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prev) => prev + 1);
            }
        });

        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);

    useEffect(() => {
        const fetchRepos = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://api.github.com/users/Guh-paixao/repos?page=${page}&per_page=10`,
                    {
                        headers: {
                            Accept: 'application/vnd.github+json',
                            'User-Agent': 'repo-list-app'
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error('Erro ao buscar repositórios');
                }

                const data = await response.json();

                setRepos((prev) => [...prev, ...data]);
                setHasMore(data.length > 0);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRepos();
    }, [page]);

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Lista de Projetos</h1> {/* Texto acima da lista */}
            <div className="h-[500px] overflow-y-auto flex flex-col gap-6 custom-scrollbar p-2">
                {repos.map((repo, index) => {
                    const isLast = repos.length === index + 1;

                    return (
                        <div
                            key={repo.id}
                            ref={isLast ? lastRepoRef : null}
                            className="flex flex-col border border-dark dark:border-white rounded p-4 hover:bg-white/10 dark:hover:bg-dark/90 transition w-full max-w-[90%] mx-auto opacity-0 animate-fadeIn" // Ajuste de largura
                            style={{ animationDelay: `${index * 0.05}s` }} // Delay para o efeito
                        >
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col gap-2 w-full"
                            >
                                <h2 className="font-semibold text-lg text-dark dark:text-white break-words">
                                    {repo.name}
                                </h2>

                                {repo.description && (
                                    <p className="text-dark/70 dark:text-white/70 text-sm">
                                        {repo.description}
                                    </p>
                                )}

                                {repo.language && (
                                    <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full border border-dark dark:border-white text-dark dark:text-white hover:scale-105 transition w-max">
                                        {repo.language}
                                    </span>
                                )}
                            </a>
                        </div>
                    );
                })}

                {isLoading && <p className="text-center text-dark dark:text-white">Carregando...</p>}
                {!hasMore && repos.length > 0 && (
                    <p className="text-center text-dark dark:text-white">Mais em Breve!</p>
                )}
            </div>
        </div>
    );
}
