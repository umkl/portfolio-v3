import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "projects");

export interface IProject {
  date: string;
  title: string;
  id: string;
  contentHtml: string;
  featured: boolean;
  githubURL?: string;
  URL?: string;
  components: string[];
  imageURL: string;
}

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...(<{ date: string; title: string }>matterResult.data),
    };
  });
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return 1;
    }
  });
}

export async function getUpcomingEvent() {
  const allEvents = getSortedProjectsData();
  return allEvents[0];
}

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as IProject),
  };
}

export async function getCompleteSortedProjectsData(): Promise<IProject[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      // console.log(processedContent);
      const contentHtml = processedContent.toString();
      return {
        id,
        contentHtml,
        ...(<IProject>matterResult.data),
      };
    })
  );

  allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return 1;
    }
  });

  return allProjectsData;
}

export async function getStaticProps() {
  const allProjectsData = getCompleteSortedProjectsData();
  return {
    props: {
      allPostsData: allProjectsData,
    },
  };
}
