module.exports = {
  siteMetadata: {
    portfolioItems: [
      {
        image: "/img/assets/group.png",
        image2: "",
        title: "Assets for iOS, Apple TV, and Web",
        description:
          "iOS, Apple TV, and Web applications for Assets all built with React and React Native. This application was intended for designers and photographers to upload the work and get feedback from clients.",
        dateComplete: "",
        badges: ["React", "React Native", "JavaScript", "Node"]
      },
      {
        image: "/img/homscout/iphonePreview.png",
        image2: "",
        title: "HomScout - Mobile Lead Generation",
        description:
          "HomScout was a React Native mobile app designed for canvassers who needed leads on their roofing projects.",
        dateComplete: "",
        badges: ["React Native", "JavaScript", "Node"]
      },
      {
        image: "/img/reeviewr/music.png",
        image2: "",
        title: "Reeviewr - Free Music Feedback",
        description:
          "Reeviewr is simple. Review a song to post a song. Everybody gets the feedback and attention they deserve, and it's completely free.",
        dateComplete: "",
        badges: ["React", "TypeScript", "GraphQL", "Prisma"]
      }
    ],
    qualificationItems: [
      {
        title: "Technology",
        items: [
          {
            keyword: "Semantic Markup",
            copy: "SEO and accessibility oriented HTML"
          },
          {
            keyword: "SASS / CSS processors",
            copy: "Modern styles with helpers, functions, and variables"
          },
          {
            keyword: "Front-End JavaScript ES7+",
            copy:
              "jQuery, React, React Native, Angular, AngularJS, Babel, Webpack, Gulp"
          },
          {
            keyword: "Back-End JavaScript",
            copy: "TypeScript, Node, Express, GraphQL, Prisma, SSR, NPM, Yarn"
          },
          {
            keyword: "Other",
            copy: "Variable Fonts, CSS Grid, Web VR, SVGs, etc"
          }
        ]
      },
      {
        title: "Process",
        items: [
          {
            keyword: "Developer Experience",
            copy:
              "DevOps, QA processes, GIT version control, Pipelines, automated unit testing"
          },
          {
            keyword: "Quality Control",
            copy:
              "Security controls, Performance diagnostics, Scalable architectures"
          },
          {
            keyword: "Development Tools",
            copy: "VS Code, WebStorm, Terminal, Sequel Pro, Homebrew, XCode"
          },
          {
            keyword: "Collaboration Tools",
            copy: "Atlassian, Github, Asana, Trello, InVision, Slack, etc"
          },
          {
            keyword: "Design Tools",
            copy: "Sketch, Photoshop, Illustrator"
          }
        ]
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`
  ]
};
