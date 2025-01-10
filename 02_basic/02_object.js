const course= {
    course_name: "JS in hindi",
    price: 999,
    instructor: "Hitesh"
}

console.log(course["instructor"]);

const {instructor} = course

console.log(instructor);

const {instructor : guide} = course

console.log(guide);

