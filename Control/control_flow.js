let userRole = "admin";
let accessLevel;

if(userRole == "customer") {
    accessLevel = "Full access granted";
} else if (userRole == "memberred") {
    accessLevel = "Limited access granted";
} else if (userRole == "member") {
    accessLevel = "Limited member access granted";
} else {
    accessLevel = "No access";
}

console.log("Access Level: ",accessLevel);

let userType = "subcriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Subscriber: ",userCategory);

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

