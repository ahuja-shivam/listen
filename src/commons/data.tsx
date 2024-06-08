export const mails = [
  {
    "id": "a1b2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p",
    "name": "John Doe",
    "subject": "John Doe on Twitter",
    "text": "Just had an amazing weekend hiking in the mountains with friends! The views were breathtaking, and the fresh air was invigorating. Can't wait for the next adventure! #hiking #outdoors #nature",
    "date": "2023-06-01T15:45:00",
    "read": false,
    "labels": ["Twitter"]
  },
  {
    "id": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    "name": "Emily Johnson",
    "subject": "Emily Johnson on Facebook",
    "text": "I'm excited to announce that I'll be speaking at the upcoming marketing conference next month! It's an honor to be invited and share my insights with fellow marketers. Looking forward to connecting with everyone there. #marketing #conference #networking",
    "date": "2023-07-15T09:00:00",
    "read": true,
    "labels": ["Facebook"]
  },
  {
    "id": "q9w8e7r6-t5y4-u3i2-o1p0-a9s8d7f6g5h4",
    "name": "Michael Brown",
    "subject": "Michael Brown on LinkedIn",
    "text": "Just completed my first year as a software engineer at ABC Company, and I couldn't be happier with my growth and the opportunities I've had. Grateful for the support of my colleagues and mentors. Looking forward to taking on new challenges in the coming year! #softwareengineering #career #gratitude",
    "date": "2023-08-10T14:30:00",
    "read": false,
    "labels": ["LinkedIn"]
  },
  {
    "id": "z1x2c3v4-b5n6m7-q8w9-e0r1-t2y3u4i5o6p",
    "name": "Sarah Davis",
    "subject": "Sarah Davis on Instagram",
    "text": "Throwback to last summer's incredible trip to the beach! The sun, the sand, and the crystal-clear water made for a perfect getaway. Can't wait to plan another beach vacation soon! #tbt #beach #summer #vacation",
    "date": "2023-09-05T18:20:00",
    "read": true,
    "labels": ["Instagram"]
  },
  {
    "id": "p1o2i3u4-y5t6r7-e8w9-q0a1-s2d3f4g5h6j",
    "name": "David Wilson",
    "subject": "David Wilson on TikTok",
    "text": "Check out my latest dance challenge video on TikTok! I had so much fun learning this routine and putting my own spin on it. Don't forget to like and follow for more content! #dancechallenge #tiktok #foryou",
    "date": "2023-10-20T12:15:00",
    "read": false,
    "labels": ["TikTok"]
  },
  {
    "id": "k1j2h3g4-f5d6s7-a8p9-o0i1-u2y3t4r5e6w",
    "name": "Jessica Thompson",
    "subject": "Jessica Thompson on Pinterest",
    "text": "I just created a new board on Pinterest dedicated to healthy meal prep ideas! From delicious breakfast options to easy dinner recipes, this board has everything you need to stay on track with your health goals. Check it out and happy pinning! #mealprep #healthyeating #pinterest",
    "date": "2023-11-08T17:00:00",
    "read": true,
    "labels": ["Pinterest"]
  },
  {
    "id": "b1v2c3x4-z5l6k7-j8h9-g0f1-d2s3a4m5n6t",
    "name": "Robert Anderson",
    "subject": "Robert Anderson on Snapchat",
    "text": "Having a blast at the music festival with my crew! The energy here is incredible, and the performances have been mind-blowing. Snapchat fam, make sure to check out my story for all the behind-the-scenes action! #musicfestival #friends #snapchat",
    "date": "2023-12-03T21:45:00",
    "read": false,
    "labels": ["Snapchat"]
  },
  {
    "id": "a1b2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p",
    "name": "John Doe",
    "subject": "John Doe on Twitter",
    "text": "Just had an amazing weekend hiking in the mountains with friends! The views were breathtaking, and the fresh air was invigorating. Can't wait for the next adventure! #hiking #outdoors #nature",
    "date": "2023-06-01T15:45:00",
    "read": false,
    "labels": ["Twitter"]
  },
  {
    "id": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    "name": "Emily Johnson",
    "subject": "Emily Johnson on Facebook",
    "text": "I'm excited to announce that I'll be speaking at the upcoming marketing conference next month! It's an honor to be invited and share my insights with fellow marketers. Looking forward to connecting with everyone there. #marketing #conference #networking",
    "date": "2023-07-15T09:00:00",
    "read": true,
    "labels": ["Facebook"]
  },
  {
    "id": "q9w8e7r6-t5y4-u3i2-o1p0-a9s8d7f6g5h4",
    "name": "Michael Brown",
    "subject": "Michael Brown on LinkedIn",
    "text": "Just completed my first year as a software engineer at ABC Company, and I couldn't be happier with my growth and the opportunities I've had. Grateful for the support of my colleagues and mentors. Looking forward to taking on new challenges in the coming year! #softwareengineering #career #gratitude",
    "date": "2023-08-10T14:30:00",
    "read": false,
    "labels": ["LinkedIn"]
  },
  {
    "id": "z1x2c3v4-b5n6m7-q8w9-e0r1-t2y3u4i5o6p",
    "name": "Sarah Davis",
    "subject": "Sarah Davis on Instagram",
    "text": "Throwback to last summer's incredible trip to the beach! The sun, the sand, and the crystal-clear water made for a perfect getaway. Can't wait to plan another beach vacation soon! #tbt #beach #summer #vacation",
    "date": "2023-09-05T18:20:00",
    "read": true,
    "labels": ["Instagram"]
  }

]
  
  export type Mail = (typeof mails)[number]
  
  export const accounts = [
    {
      label: "Alicia Koch",
      email: "alicia@example.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Vercel</title>
          <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Alicia Koch",
      email: "alicia@gmail.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Gmail</title>
          <path
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Alicia Koch",
      email: "alicia@me.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>iCloud</title>
          <path
            d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ]
  
  export type Account = (typeof accounts)[number]
  
  export const contacts = [
    {
      name: "Emma Johnson",
      email: "emma.johnson@example.com",
    },
    {
      name: "Liam Wilson",
      email: "liam.wilson@example.com",
    },
    {
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
    },
    {
      name: "Noah Martinez",
      email: "noah.martinez@example.com",
    },
    {
      name: "Ava Taylor",
      email: "ava.taylor@example.com",
    },
    {
      name: "Lucas Brown",
      email: "lucas.brown@example.com",
    },
    {
      name: "Sophia Smith",
      email: "sophia.smith@example.com",
    },
    {
      name: "Ethan Wilson",
      email: "ethan.wilson@example.com",
    },
    {
      name: "Isabella Jackson",
      email: "isabella.jackson@example.com",
    },
    {
      name: "Mia Clark",
      email: "mia.clark@example.com",
    },
    {
      name: "Mason Lee",
      email: "mason.lee@example.com",
    },
    {
      name: "Layla Harris",
      email: "layla.harris@example.com",
    },
    {
      name: "William Anderson",
      email: "william.anderson@example.com",
    },
    {
      name: "Ella White",
      email: "ella.white@example.com",
    },
    {
      name: "James Thomas",
      email: "james.thomas@example.com",
    },
    {
      name: "Harper Lewis",
      email: "harper.lewis@example.com",
    },
    {
      name: "Benjamin Moore",
      email: "benjamin.moore@example.com",
    },
    {
      name: "Aria Hall",
      email: "aria.hall@example.com",
    },
    {
      name: "Henry Turner",
      email: "henry.turner@example.com",
    },
    {
      name: "Scarlett Adams",
      email: "scarlett.adams@example.com",
    },
  ]
  
  export type Contact = (typeof contacts)[number]