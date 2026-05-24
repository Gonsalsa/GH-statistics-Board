import {useEffect, useState} from "react";

import "../CSS/style.css"
import LanguageDonut from "./LanguageDonut.tsx";

import type {Repos} from "../Types/RepoType.ts";
import type {Commits} from "../Types/CommitsType.ts";
import type {Profile} from "../Types/ProfileType.ts";
import type {Language} from "../Types/LanguageType.ts";

import {getRepos} from "../Service/LoadRepos.ts";
import  {getCommits} from "../Service/LoadCommits.ts";
import  {getProfile} from "../Service/LoadProfile.ts";
import {getLanguages} from "../Service/LoadLanguage.ts";

const MainPage = () => {

    const [repo, setRepo] = useState<Repos[]>([])
    const [commits, setCommits] = useState<Commits[]>([])
    const [profile, setProfile] = useState<Profile | null>(null)
    const [languages, setLanguages] = useState<Language[]>([])

    useEffect(() => {
        getRepos().then(setRepo).catch(console.error)
        getCommits().then(setCommits).catch(console.error)
        getProfile().then(setProfile).catch(console.error)
        getLanguages().then(setLanguages).catch(console.error)
    }, []);



    return (
        <div className="dashboard">

            <div className="card">
                {profile && (
                    <>
                        <img
                            src={profile.avatarURL}
                            alt="GitHub avatar"
                            className="avatar"
                            />
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
                            <p>
                                {" "}
                                {new Date(c.date).toLocaleDateString("sv-SE", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card"  style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                minWidth: 0,
                width:"100%"
            }}>
                <p className="label" style={{alignSelf: "flex-start"}}>Language stats</p>
                <LanguageDonut languages={languages} />
            </div>

            <div className="card">
                <p className="label">Commit activity</p>
                <p style={{color: "#8b949e", fontSize: "13px"}}>Coming soon</p>
            </div>

            <div className="card">
                <p className="label">Montly Commits</p>
                <p style={{color: "#8b949e", fontSize: "13px"}}>Coming soon</p>
            </div>

        </div>
    )

}
export default MainPage;