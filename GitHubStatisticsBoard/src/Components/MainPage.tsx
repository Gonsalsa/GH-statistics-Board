import {useEffect, useState} from "react";


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

    const fetchrepos = async() => {
        try {
            const data = await getRepos();
            setRepo(data);
        }
        catch (error)
        {
            console.error(error)
        }
    }

    const fetchcommits = async () => {
        try {
            const data = await getCommits();
            setCommits(data)
        }
        catch (error)
        {
            console.error(error)
        }
    }

    const fetchprofile = async () => {
        try {
            const data = await getProfile();
            setProfile(data)
        }
        catch (error)
        {
            console.error(error)
        }
    }


    useEffect(()=> {fetchrepos()
    }, []);

    useEffect(() => {fetchcommits()
    }, []);

    useEffect(() => {fetchprofile()
    }, []);



    return <>

        <h1>Your GitHub Statistics</h1>

        <div id="profile">
            {profile && (
                <div>
                    <h2>{profile.Username}</h2>
                    <p>{profile.name}</p>
                    <p>Email: {profile.Email}</p>
                    <p>Numeber of public repos: {profile.repoCount}</p>
                </div>
            )}
        </div>

        <div id="repos">
            <h2>Top repos</h2>
            {repo.map((r) => (
                <div>
                    <h3>{r.name}</h3>
                    <p>Numbers of star marks: {r.stars}</p>
                    <p>Numbers of watchers: {r.Watchers}</p>
                </div>
            ))}

        </div>

        <div id="commits"></div>
            <h2>Latest Commits</h2>
            {commits.map((c) => (
                <div>
                    <h3>{c.repo}</h3>
                    <p>{c.author}</p>
                    <p>{c.date}</p>
                    <p>{c.message}</p>
                </div>
            ))}


    </>

}
export default MainPage;