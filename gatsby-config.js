module.exports = {
  siteMetadata: {
    portfolioItems: [
      {
        image: "/img/climatecheck/climateCheck.png",
        image2: "",
        title: "ClimateCheck - Climate Reports",
        description:
          "ClimateCheck brings the realities of climate change to your doorstep with a proprietary rating️ and report for any US property. The report details areas such as flood risk, fire risk, and storm risk.",
        dateComplete: "",
        badges: ["React", "TypeScript"]
      },
      {
        image: "/img/reeviewr/beta.jpg",
        image2: "",
        title: "Reeviewr - Free Music Feedback",
        description:
          "Reeviewr is for anybody, from creatives to students. Review a piece of content to post content. Everybody gets the feedback and attention they deserve, and it's completely free.",
        dateComplete: "",
        badges: ["React", "TypeScript", "GraphQL", "Prisma"]
      },
      {
        image: "/img/homscout/iphonePreview.png",
        image2: "",
        title: "HomScout - Mobile Lead Generation",
        description:
          "HomScout was a React Native mobile app designed for canvassers to identify, pin, and market to a chosen address when scouting potential homes for roof repairs.",
        dateComplete: "",
        badges: ["React Native", "JavaScript", "Node"]
      },
      {
        image: "/img/assets/group.png",
        image2: "",
        title: "Assets - Proofing and Collaboration",
        description:
          "For iOS, Apple TV, and Web, all apps built with React and React Native. This application was intended for designers and photographers to upload their work and get feedback from clients.",
        dateComplete: "",
        badges: ["React", "React Native", "JavaScript", "Node"]
      }
    ],
    qualificationItems: [
      {
        title: "Technology",
        items: [
          {
            keyword: "Semantic Markup",
            copy: "HTML, JSX, SEO, Accessibility"
          },
          {
            keyword: "Scalable Styling",
            copy: "SASS pre-processors, UI kits, helpers, functions, and variables"
          },
          {
            keyword: "Client-Side Development",
            copy:
              "React, React Native, Angular, AngularJS, Babel, Webpack, Gulp"
          },
          {
            keyword: "Server-Side Development",
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
