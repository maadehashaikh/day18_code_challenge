// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
var UserDetails = {
    user: "student",
    metadetails_of_course: {
        coding_language: ["Typescript", "react", "Python"],
        tools: ["VScode", "git", "Chrome", "DevTools"],
        software_frameworks: ["React", "Angular", "Nodejs"],
    }
};
var user = UserDetails.user, _a = UserDetails.metadetails_of_course, coding_language = _a.coding_language, tools = _a.tools, software_frameworks = _a.software_frameworks;
console.log("Language will be taught in this course is : ".concat(coding_language[1], " \nand Framework that will be used is : ").concat(software_frameworks[0], " and tools that will also be taught are \n").concat(tools[2]));
// A list showing a programmer's skills in detail
// let developerSkills = {
//   languages: ["JavaScript", "TypeScript", "Python"],
//   frameworks: ["React", "Angular", "Vue"],
//   tols: ["Git", "Webpack", "Docker"]
// };
// // Getting specific skills from the list
// let { languages, frameworks, tols } = developerSkills;
// // Showing a skill from each category
// console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tols[0]}`);
