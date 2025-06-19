export const getCurrentAge = (): { age: number; hoursLeft: number } => {
    const MY_BD = new Date("2002-08-18");
    const today = new Date();
    const thisYearBirthday = new Date(today.getFullYear(), MY_BD.getMonth(), MY_BD.getDate());

    let age = today.getFullYear() - MY_BD.getFullYear();
    if (
        today.getMonth() < MY_BD.getMonth() ||
        (today.getMonth() === MY_BD.getMonth() && today.getDate() < MY_BD.getDate())
    ) {
        age--;
    }

    let nextBirthday = thisYearBirthday;
    if (today > thisYearBirthday) {
        nextBirthday = new Date(today.getFullYear() + 1, MY_BD.getMonth(), MY_BD.getDate());
    }

    const msInHour = 1000 * 60 * 60;
    const hoursLeft = Math.ceil((nextBirthday.getTime() - today.getTime()) / msInHour);

    return { age, hoursLeft };
};
