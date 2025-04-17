# Aurora: Spotify-Powered Playlist and Artist Recommendation

<img width="1400" alt="Playlist Page After Input" src="https://github.com/user-attachments/assets/1a04c956-7048-4f29-8ef7-2a8297a87a0f" />
<img width="1400" alt="Artist Recomendation Page" src="https://github.com/user-attachments/assets/112c7fb0-4b50-41ec-81e2-834218a15289" />

## Inspiration

If you're anything like me, you might make a lot of playlists-so many that you can't even keep track of them. I often found myself endlessly scrolling through my 20+ playlists on Spotify searching for the right one, so I thought: why not build something to decide for me? 

## What it Does

**Aurora** is a personalized music discovery web app that interacts with Spotify’s API to generate tailored playlist recommendations. Once authenticated, users can input genres or specific artists, and the app dynamically fetches and processes data to reccomend playlists that matches the user's preferences.

## Tech Stack

- **React** – Used to build the interactive user interface and manage component-based logic  
- **JavaScript** – Handles API requests, user input, and application logic  
- **CSS** – Provides custom styling for a clean and responsive user experience

## Challenges

- **Multi-endpoint integration**: Spotify’s API distributes key information like track, artist, and genre across separate endpoints. This required chaining multiple requests and carefully managing how the data was merged and used within the app.

- **Rate limiting**: Spotify enforces rate limits on how many API calls can be made within a 30-second window. To stay within those limits, I implemented batch-processing strategies and a backoff-retry mechanism to handle temporary blocks without disrupting the user experience.

- **Scaling with large datasets**: As the app processes hundreds of tracks and artists per user session, I came across needing to optimize data handling and memory usage to ensure smooth performance during real-time recommendation generation.

## Accomplishments

One major milestone was securing a quota extension for the Spotify Developer API after several applications. Prior to this, I had to manually onboard each user by adding them to my developer dashboard—an inefficient process that limited access. With the extension approved, Aurora now supports open authentication, allowing any user to seamlessly log in and explore the app independently.

I'm also particularly proud of implementing a solution for retrieving genre data, despite the absence of a direct Spotify endpoint for song-level genre classification. To overcome this, I developed a workaround by extracting the artist associated with each track across playlists, then querying the genre metadata at the artist level. This approach allowed me to approximate song genres and significantly improve the accuracy and personalization of Aurora’s recommendation system.

## What's Next

- **AI Mood-to-Genre Feature:** Rather than asking users to input a specific genre, I would like to incorporate AI to interpret mood-based keywords like “Happy,” “Energetic,” or “Sad.” This will allow users to simply describe how they’re feeling, and Aurora will generate personalized playlist and artist recommendations based on that mood, eliminating the need to mention specific genres like “Pop” or “Rock.”

## Try It Yourself!

Aurora is hosted online at https://auroraplaylists.vercel.app/ :)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
