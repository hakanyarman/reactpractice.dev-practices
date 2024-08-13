import Accordion from "./components/Accordion";


const items = [
  {
    title: "What is Github and how does it work?",
    content:
      "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
  },
  {
    title: "How do I see GitHub's availability?",
    content: "Check our real-time status report",
  },
  {
    title: "Why is GitHub so popular?",
    content:
      "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
  },
  {
    title: "How do I contribute to open source on GitHub?",
    content:
      "To contribute to open source on GitHub, find a project you're interested in, fork the repository, and create a pull request. GitHub makes it easy to collaborate on code with others.",
  },
  {
    title: "What is GitHub Actions?",
    content:
      "GitHub Actions is a CI/CD tool that allows you to automate your software workflows directly in your repository. You can create custom workflows or use pre-built actions to streamline your development process.",
  },
  {
    title: "Can I host a website on GitHub?",
    content:
      "Yes, with GitHub Pages, you can host a static website directly from your GitHub repository. It’s a simple way to deploy your personal website, portfolio, or documentation site for free.",
  },
  {
    title: "What is GitHub Marketplace?",
    content:
      "GitHub Marketplace is a place where developers can find and purchase tools and services that integrate with GitHub. It includes apps, actions, and other tools to help you improve your development workflow.",
  },
];


function App() {
  return (
    <>
      <Accordion
        items={items}
      />
    </>
  );
}

export default App;
