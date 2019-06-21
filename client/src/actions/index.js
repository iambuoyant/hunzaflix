import movie from "../data/movies/rabita.mp4";

export function getMovielist() {
  return {
    type: "MOVIES",
    payload: [
      {
        id: "story11",
        author: "INam U Khan",
        publishDate: "January 17, 2019",
        url: "#",
        category: "Node",
        tags: "node,react",
        title: "Node.JS + IoT = Node-RED, flow-based programming tool for IoT",
        excerpt:
          "If you haven’t met Node-RED yet, it is time for an official introduction. Node-RED is a flow-based programming tool for the Internet of Things that consists of a Node.js-based runtime. Let’s have a closer look.",
        movie: movie,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.s"
      }
    ]
  };
}

export * from "./Movies";
