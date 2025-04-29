'use client';
import { useEffect, useState, useRef, useCallback } from "react";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string | null;
    created_at: string;
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

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    return (
        <div className="w-full max-w-base md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto px-4 md:px-8 py-8">
            <h1 className="text-center text-base md:text-base lg:text-md xl:text-lg 2xl:text-xl font-bold mb-8 text-dark dark:text-white">
                Meus Repositórios
            </h1>

            <div className="h-[70vh] overflow-y-auto flex flex-col gap-6 p-2 md:p-4 lg:p-6 custom-scrollbar">
                {repos.map((repo, index) => {
                    const isLast = repos.length === index + 1;

                    return (
                        <div
                            key={repo.id}
                            ref={isLast ? lastRepoRef : null}
                            className="flex flex-col justify-between border border-dark/20 dark:border-white/20 rounded-lg p-4 hover:bg-dark/5 dark:hover:bg-white/5 transition-all w-full opacity-0 animate-fadeIn min-h-[160px]"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col h-full"
                            >
                                <h2 className="font-semibold text-base md:text-base lg:text-md xl:text-lg 2xl:text-xl text-dark dark:text-white break-words">
                                    {repo.name}
                                </h2>

                                {repo.description && (
                                    <p className="text-base text-dark/70 dark:text-white/70 flex-grow">
                                        {repo.description}
                                    </p>
                                )}

                                <div className="flex justify-between items-center mt-4">
                                    {repo.language ? (
                                        <span className="px-3 py-1 text-xs rounded-full border border-dark/50 dark:border-white/50 text-dark dark:text-white w-max">
                                            {repo.language}
                                        </span>
                                    ) : (
                                        <span />
                                    )}

                                    <span className="text-xs md:text-sm text-dark/50 dark:text-white/50">
                                        {formatDate(repo.created_at)}
                                    </span>
                                </div>
                            </a>
                        </div>
                    );
                })}

                {isLoading && (
                    <p className="text-center text-dark dark:text-white text-sm md:text-base">
                        Carregando...
                    </p>
                )}
                {!hasMore && repos.length > 0 && (
                    <p className="text-center text-dark dark:text-white text-sm md:text-base">
                        Mais em breve!
                    </p>
                )}
            </div>
        </div>
    );
}
