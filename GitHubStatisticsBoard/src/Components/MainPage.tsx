import {useEffect, useState} from "react";

import "../CSS/style.css"

import type {Repos} from "../Types/RepoType.ts";
import type {Commits} from "../Types/CommitsType.ts";
import type {Profile} from "../Types/ProfileType.ts";

import {getRepos} from "../Service/LoadRepos.ts";
import  {getCommits} from "../Service/LoadCommits.ts";
import  {getProfile} from "../Service/LoadProfile.ts";

const MainPage = () => {

    const [repo, setRepo] = useState<Repos[]>([])
    const [commits, setCommits] = useState<Commits[]>([])
    const [profile, setProfile] = useState<Profile | null>(null)

    useEffect(() => {
        getRepos().then(setRepo).catch(console.error)
        getCommits().then(setCommits).catch(console.error)
        getProfile().then(setProfile).catch(console.error)
    }, []);



    return (
        <div className="dashboard">

            <div className="card">
                {profile && (
                    <>
                        <h2>{profile.Username}</h2>
                        <p>{profile.name}</p>
                        <p>{profile.Email}</p>
                        <p>Public Repos: {profile.repoCount}</p>
                    </>
                )}
            </div>

            <div className="card">
                <p className="label">Top Repos</p>
                {repo.map((r) => (
                    <div key={r.name} className="repo-item">
                        <a href={r.htmlURL} target="_blank" rel="noreferrer" className="repo-link">
                            {r.name}
                        </a>
                        <span> Stars {r.stars} | Watchers: {r.Watchers}</span>
                    </div>
                ))}
            </div>

            <div className="card">
                <p className="label">Latest Commits</p>
                <div className="commit-scroll">
                    {commits.map((c, index) => (
                        <div key={index} className="commit-row">
                            <span className="sha">{c.repo}</span>
                            <p>{c.message}</p>
                            <p>{c.date}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}
export default MainPage;