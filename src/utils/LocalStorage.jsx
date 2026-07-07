const employees = [
  {
    id: 1,
    firstName: "Ajit",
    email: "a@a.com",
    password: "123",
    taskNo: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and CSS.",
        taskDate: "2026-06-18",
        category: "Frontend"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive navbar issues on mobile devices.",
        taskDate: "2026-06-15",
        category: "Bug Fix"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNo: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build REST API",
        taskDescription: "Develop CRUD APIs for employee management.",
        taskDate: "2026-06-19",
        category: "Backend"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription: "Migrate MySQL database to MongoDB.",
        taskDate: "2026-06-14",
        category: "Database"
      }
    ]
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskNo: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Design and implement the employee dashboard.",
        taskDate: "2026-06-20",
        category: "Frontend"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Document all REST API endpoints.",
        taskDate: "2026-06-12",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",
    taskNo: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Add JWT authentication to the application.",
        taskDate: "2026-06-21",
        category: "Security"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Test API performance under heavy load.",
        taskDate: "2026-06-13",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNo: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNo: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the latest version to the production server.",
        taskDate: "2026-06-22",
        category: "DevOps"
      },
      {
        taskNo: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for authentication APIs.",
        taskDate: "2026-06-16",
        category: "Testing"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    firstName: "Ajit",
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin};
}