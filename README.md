# Virtual Job Fair

## Won the main prize at CrackedDevs first Hackathon

<h3>Demo <a href="https://hackathon.cornidez.com/">Link</a></h3>

<h3>How-to-run:</h3>

    download repo
    cd into root of project
    run "npm install"
    create an .env file in root that contains CrackedDevs API key (example .env below)
    run "npm run dev"

<hr/>

<h3>ChangeLog</h3>

<h4>Version 0.0.2 (2024-1-21)</h4>

    - Finish the Speaker Listing Component
    - Create Job Fair Listing:
        Job Fair Listing Component (Employees, Table Color, Logo)
        Detail View (shows video, employees, call button, and details)
        Youtube Embedded Video Component
    - Create Landing Page
    - Show Account Page is under development
    - Added a few more Avatars
    - Reconfigured Job Fair Listings to be dynamically rendered

<h4>Version 0.0.1 (2024-1-20)</h4>

    - Initialized the firestore database and Next.js Application.
    - Acquired API Keys for api.crackeddevs.com and firestore.
    - Configured crackeddevs API
    - Created Navigation Component
    - Created layout for Job Fair and Job Listings pages.
    - Created background pixel Art and Sample Avatar & Profile.

<hr/>

<h3>Planned Implementations</h3>

    - Setup Firestore Controllers (Users, JobFairListings, Events, Companies)
    - Create Account Page
    - Create New Profile Setup Page (Add contact info, resume, and configure avatar)
    - Create an Avatar builder (base model, choose skin tone, eye/hair color, outfit)
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
