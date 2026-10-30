export default async function Github(){
    const res = await fetch(
     "https://api.github.com/users/gdantas2323/repos"   
    );
    const repos = await res.json();

    return (
    <ul>
        {repos.map((r) => <li key ={r.id}>{r.name}</li>)}
    </ul>

    );
}
