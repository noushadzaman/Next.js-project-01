"use client";

import { groupBy } from "@/utils";
import { getDocumentsByAuthor, getDocumentsByCategory, getDocumentsByTag } from "@/utils/doc-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = ({ docs }) => {
    const pathName = usePathname();
    const [rootNodes, setRootNodes] = useState([]);
    const [nonRootNodesGrouped, setNonRootNodesGrouped] = useState({});

    useEffect(() => {
        let matchedDocs = docs;

        if (pathName.includes('/tags')) {
            const tag = pathName.split('/')[2];
            matchedDocs = getDocumentsByTag(docs, tag);
        }
        else if (pathName.includes('/authors')) {
            const author = pathName.split('/')[2];
            matchedDocs = getDocumentsByAuthor(docs, author);
        } else if (pathName.includes('/categories')) {
            const category = pathName.split('/')[2];
            matchedDocs = getDocumentsByCategory(docs, category);
        }

        const roots = matchedDocs.filter(doc => !doc.parent);
        const nonRoots = groupBy(
            matchedDocs.filter((doc) => doc.parent),
            ({ parent }) => parent
        );

        const nonRootsKeys = Reflect.ownKeys(nonRoots);

        nonRootsKeys.forEach(key => {
            const foundInRoots = roots.find(root => root.id === key);
            if (!foundInRoots) {
                const foundInDocs = docs.find(doc => doc.id === key);
                roots.push(foundInDocs);
            }
        })

        roots.sort((a, b) => {
            if (a.order < b.order) {
                return -1;
            }
            if (a.order > b.order) {
                return 1;
            }
            return 0;
        });

        setRootNodes([...roots]);
        setNonRootNodesGrouped({ ...nonRoots });

    }, [pathName]);


    return (
        <nav className="lg:block my-10">
            <ul>
                <div className="relative mt-3 pl-2">
                    <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:white/2.5"></div>
                    <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                    <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
                    <ul role="list" className="border-l border-transparent">
                        {
                            rootNodes.map((rootNode) => (
                                <li key={rootNode.id} className="relative">
                                    <Link
                                        aria-current="page"
                                        href={`/docs/${rootNode.id}`}
                                        className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                                    >
                                        <span className="truncate">
                                            {rootNode.title}
                                        </span>
                                    </Link>
                                    {nonRootNodesGrouped[rootNode.id] && (
                                        <ul className="border-l border-transparent" role="list">
                                            {
                                                nonRootNodesGrouped[rootNode.id].map((subRoot => (
                                                    <li key={subRoot.id}>
                                                        <Link
                                                            href={`/docs/${rootNode.id}/${subRoot.id}`}
                                                            className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-900 transition dark:text-white"
                                                        >
                                                            <span className="truncate">
                                                                {subRoot.title}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                )))
                                            }
                                        </ul>
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            </ul>
        </nav>
    );
};

export default Sidebar;