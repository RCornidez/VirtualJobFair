# Virtual Job Fair

## CrackedDevs First Hackathon

<h3>Demo <a href="#">Link</a></h3>


<h3>How-to-run:</h3>

    download repo
    cd into root of project
    run "npm install"
    create an .env file in root that contains CrackedDevs and Firestore Database API keys (example .env below)
    run "npm run dev"

<hr/>

<h3>ChangeLog</h3>

<h4>Version 0.0.1 (2024-1-20)</h4>

    - Initialized the firestore database and Next.js Application.
    - Acquired API Keys for api.crackeddevs.com and firestore.
    - Configured crackeddevs API
    - Created Navigation Component
    - Created layout for Job Fair and Job Listings pages.
    - Created background pixel Art and Sample Avatar & Profile.

<hr/>

<h3>Planned Implementations</h3>

    - Finish the Speaker Listing Component
    - Create Job Fair Listing:
        Public View Component (Employees, Table Color, Logo)
        PopUp Detail Component (shows video, employees, call button, and details)
        Youtube Embedded Video Component
    - Setup Firestore Controllers (Users, JobFairListings, Events, Companies)
    - Create Account Page
    - Create more Avatars (and their associated profile pictures)
    - Configure Authentication (either Auth0 or Next Auth)


<hr/>

<h3>.env example</h3>
    # CrackedDev.com API
    CD_API_KEY=1bc7r0y3-999r-451s-88f7-5bc7f12et499

    # Firebase API
    FB_API_KEY=CIazSyCHky_f9LdJ_WcbhkvkOFEdIYRry42BQzY
    FB_AUTH_DOMAIN=virtual-9475c.firebaseapp.com
    FB_PROJECT_ID=virtual-9475c
    FB_STORAGE_BUCKET=virtual-9475c.appspot.com
    FB_MESSAGE_SENDER_ID=243230997565
    FB_APP_ID=1:183230668951:web:f00ac015561c33frc1205c
