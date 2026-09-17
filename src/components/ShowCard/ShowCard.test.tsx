import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";


import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);


import ShowCard from ".";


const show = {
    "id": 1,
    "url": "https://www.tvmaze.com/shows/1/under-the-dome",
    "name": "Under the Dome",
    "type": "Scripted",
    "language": "English",
    "genres": [
      "Drama",
      "Science-Fiction",
      "Thriller"
    ],
    "status": "Ended",
    "runtime": 60,
    "averageRuntime": 60,
    "premiered": "2013-06-24",
    "ended": "2015-09-10",
    "officialSite": "http://www.cbs.com/shows/under-the-dome/",
    "schedule": {
      "time": "22:00",
      "days": [
        "Thursday"
      ]
    },
    "rating": {
      "average": 6.6
    },
    "weight": 100,
    "network": {
      "id": 2,
      "name": "CBS",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      },
      "officialSite": "https://www.cbs.com/"
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
      "tvrage": 25988,
      "thetvdb": 264492,
      "imdb": "tt1553656"
    },
    "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/610/1525272.jpg"
    },
    "summary": "\u003Cp\u003E\u003Cb\u003EUnder the Dome\u003C/b\u003E is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.\u003C/p\u003E",
    "updated": 1789071819,
    "_links": {
      "self": {
        "href": "https://api.tvmaze.com/shows/1"
      },
      "previousepisode": {
        "href": "https://api.tvmaze.com/episodes/185054",
        "name": "The Enemy Within"
      }
    }

}



describe("ShowCard component", () => {
  beforeEach(() => {
    render(<ShowCard show={show} />);
  });
  afterEach(() => {
    cleanup();
  });

  it('dislays a show card ', ()=>{

    const div = screen.getByRole('figure')
    expect(div.children.length).toBe(2)
  })

  it('Displays a description of the show', ()=>{
    const h2 = screen.getByRole('heading')
    const span = screen.getByRole('rating')
    expect(h2.textContent).toBe(show.name)
    expect(span.textContent).toBe(` (${show.rating.average}/10)`)
  })
 
});
