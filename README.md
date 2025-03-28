# Aurora: Spotify-Powered Playlist and Artist Recommendation

<img width="1400" alt="Playlist Page Before Input" src="https://github.com/user-attachments/assets/0e311eff-27ec-4bd7-9ffc-3438cc9fbb53" />
<img width="1400" alt="Playlist Page After Input" src="https://github.com/user-attachments/assets/1a04c956-7048-4f29-8ef7-2a8297a87a0f" />
<img width="1400" alt="Artist Recomendation Page" src="https://github.com/user-attachments/assets/112c7fb0-4b50-41ec-81e2-834218a15289" />

## Inspiration
If you're anything like me, you might make a lot of playlists-so many that you can't even keep track of them. I often found myself endlessly scrolling through my 20+ playlists on Spotify, so I thought: why not build something to decide for me? Aurora does just that, allowing users to get personalized playlist recommendations based on a specific genre they input.

## How It Works
**Aurora** leverages the React library to interact with and display data from Spotify's API. Once authenticated, users can input genres or specific artists, and the app dynamically retrieves and processes data from Spotify’s endpoints to recommend playlists tailored to the user's preferences.

## Challenges
One of the biggest challenges was getting the app approved for Spotify's quota extension, which was officially granted on January 25th, 2025 🎉. The structuring of Spotify's API presented another hurdle as not all endpoints provided the specific data I needed. To work around this, I had to combine and process data from multiple endpoints to get the desired results, which was in fact rewarding in the end. 

Another challenge was Spotify's API rate limits, which restrict the number of calls an app can make within a 30-second window. To address this, I implemented batch processing techniques, reducing the number of API calls and preventing rate limiting. Additionally, I added a backoff-retry strategy to handle instances where rate limits were approached, ensuring the app remained responsive and within Spotify's usage policies.

## What's Next

- **AI Mood-to-Genre Feature:** Rather than asking users to input a specific genre, I plan to incorporate AI that interprets mood-based keywords like “Happy,” “Energetic,” or “Sad.” This will allow users to simply describe how they’re feeling, and Aurora will generate personalized playlist and artist recommendations based on that mood, eliminating the need to mention specific genres like “Pop” or “Rock.”

## Try It Yourself!

Aurora is hosted online at https://auroraplaylists.vercel.app/ :)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
