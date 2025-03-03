How It Works:
Publisher's Website:

The user clicks on the ad.
The click event is logged (simulated) with session data and sent to localStorage.
The user is redirected to the Advertiser’s website with a session ID as part of the URL.


Advertiser's Website:

On page load, the session ID from the URL is used to retrieve the click data from localStorage.
If the session ID matches the stored click data, it validates the session.
When the user clicks the "Buy" button, the purchase event is logged and tracked.
Important Notes:
This is a basic simulation and doesn’t involve actual server-side tracking or real-time databases like Impact.com uses.
This example uses localStorage to simulate tracking across pages, and the session is identified by a session ID stored in the URL.
A real implementation would involve server-side tracking, cookies, database interactions, and various checks for attribution windows and user actions.