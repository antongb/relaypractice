import * as React from "react";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import Story from "./Story";
import type { NewsfeedQuery as NewsfeedQueryType } from './__generated__/NewsfeedQuery.graphql';



const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStories {
      id
      ...StoryFragment
    }
  }
`;

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  console.log(data);
  const stories = data.topStories;
  // const story = {
  //   title: "Placeholder Story",
  //   summary: "Placeholder data, to be replaced with data fetched via GraphQL",
  //   poster: {
  //     name: "Placeholder Person",
  //     profilePicture: {
  //       url: "/assets/cat_avatar.png",
  //     },
  //   },
  //   thumbnail: {
  //     url: "/assets/placeholder.jpeg",
  //   },
  // };

  return (
    <div className="newsfeed">
      {stories.map(story =>
        <Story
          key={story.id}
          story={story}
        />
      )}
    </div>
  );
}
