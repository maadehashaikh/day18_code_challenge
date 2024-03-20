// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
let UserDetails = {
  user: "student",
  metadetails_of_course: {
    coding_language: ["Typescript", "react", "Python"],
    tools: ["VScode", "git", "Chrome", "DevTools"],
    software_frameworks: ["React", "Angular", "Nodejs"],
  }
};
let {user, metadetails_of_course: {coding_language, tools, software_frameworks}} = UserDetails;
console.log(`It is mandatory that user must be a ${user} ,Language will be taught in this course is : ${coding_language[1]} 
and Framework that will be used is : ${software_frameworks[0]} and tools that will also be taught are 
${tools[2]}`);
