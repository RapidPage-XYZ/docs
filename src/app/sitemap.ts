import fs from 'fs';
import path from 'path';
import * as process from "node:process";

interface FolderMap {
  url: string;
  lastModified: string;
  changeFrequency: string;
}

export default function sitemap(): FolderMap[] {
  // Recursive function to get all folders within a directory
  const getFolders = (dir: string): string[] => {
    const results: string[] = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        results.push(filePath);
        results.push(...getFolders(filePath));
      }
    });

    return results;
  };

  // Resolve the base directory
  const baseDir = path.resolve(process.cwd(), 'src/app/docs');

  if (!fs.existsSync(baseDir)) {
    throw new Error(`Directory does not exist: ${baseDir}`);
  }

  const folders = getFolders(baseDir);

  // Filter for specific folders
  const filteredFolders = folders.filter((folder) => {
    const folderPath = folder.replace(baseDir, '').replace(/\\/g, '/');
    const pathParts = folderPath.split('/');

    // Ignore the 'tutorials' and 'components' folders but include their subfolders
    return !(pathParts.length === 2 && (pathParts[1] === 'tutorials' || pathParts[1] === 'components'));
  });

  // Map folders to the desired structure
  const foldersMap: FolderMap[] = filteredFolders.map((folder) => {
    const folderPath = folder.replace(baseDir, '').replace(/\\/g, '/');
    return {
      url: `${process.env.NEXT_PUBLIC_APP_URL}${folderPath}`,
      lastModified: new Date().toISOString().split('T')[0], // Assuming last modified is today
      changeFrequency: 'daily',
    };
  });

  // Define static routes
  const staticRoutes: FolderMap[] = [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
    }
  ];

  // Combine and return routes
  return [...staticRoutes, ...foldersMap];
}
