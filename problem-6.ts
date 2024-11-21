interface Profile{
    name: string;
    age: number;
    email: string;
}

type ProfilePartial = Partial<Profile>;


function updateProfile(profile: Profile, props: ProfilePartial):Profile {
    for (const key in props) {
        if (key === "age" && props[key]) {
            profile[key] = props[key];
        } else if (key === "name" && props[key]) {
            profile[key] = props[key];
        } else if (key === "email" && props[key]) {
            profile[key] = props[key];
       }
    }
    return profile;
}

let myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 4,name:'Belaice' }));

