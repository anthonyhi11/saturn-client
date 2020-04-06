let DATA = {
  projects: [
    {
      name: "New Yelp",
      id: 1,
      date_created: new Date(),
      status: "Active",
      target: "4/15/2020"
    },
    {
      name: "New Facebook",
      id: 2,
      date_created: new Date(),
      status: "Active",
      target: "4/15/2020"
    },
    {
      name: "New Google",
      id: 3,
      date_created: new Date(),
      status: "Active",
      target: "4/15/2020"
    }
  ],
  issues: [
    {
      dev: "Anthony",
      id: 1,
      projectId: 1,
      stage: "New",
      title: "New log out button",
      desc:
        "As a user, I want to be able to do something that will take the dev a at least 6 hours to accomplish"
    },
    {
      dev: "Anthony",
      id: 2,
      projectId: 1,
      stage: "In Progress",
      title: "Verify user",
      desc:
        "As a user, I want to be able to do something that will take the dev a at least 6 hours to , is it necessary? Probably not... But you better believe i want it"
    },
    {
      dev: "Anthony",
      id: 3,
      projectId: 1,
      stage: "New",
      title: "Adding an issue",
      desc:
        "As a user, I want to be able to do something that will take the dev a at least 20 hour to accomplish. This is something that is absolutely requried. Here is a long description of what it is that way i can compare what to do with long descriptions on the ui. It'll be interesting to see how it turns out."
    },
    {
      dev: "Anthony",
      id: 4,
      projectId: 2,
      stage: "New",
      title: "New log out button",
      desc:
        "As a user, I want to be able to do something that will take the dev a at least 6 hours to accomplish"
    },
    {
      dev: "Anthony",
      id: 5,
      projectId: 2,
      stage: "New",
      title: "Add an issue!",
      desc:
        "As a user, I want to be able to do something that will take the dev a at least 6 hours to accomplish  is it necessary? Probably not... But you better believe i want it"
    },
    {
      dev: "Anthony",
      id: 6,
      projectId: 3,
      stage: "New",
      title: "New log out button",
      desc:
        "As a user, I want to be able to do something that will take the dev a at least 6 hours to accomplish"
    }
  ],
  comments: [
    {
      id: 1,
      author: "AnthonyEvil",
      text: "bro your code is soooooo scattered. Get it fixed asap",
      issueId: 1,
      datePosted: new Date()
    },
    {
      id: 2,
      author: "Anthony2",
      text: "shut up i'm trying my best",
      issueId: 1,
      datePosted: new Date()
    },
    {
      id: 3,
      author: "AnthonyEvil",
      text:
        "haha okay fine!!!!!! but seriously. here's a long one to see how to handle longer comments in the UI. will likely be as simple as making the height fit-content but it's nice to have a real example of a  longer comment",
      issueId: 1,
      datePosted: new Date()
    },
    {
      id: 4,
      author: "Anthony",
      text: "bro your code is soooooo scattered. Get it fixed asap",
      issueId: 2,
      datePosted: new Date()
    }
  ]
};

export default DATA;
