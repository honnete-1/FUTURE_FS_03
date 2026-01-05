export default function NotificationsPage() {
    const notifications = [
        {
            id: 1,
            title: "New Arrival: Cyberpunk Edgerunners",
            body: "The wait is over. Experience the high-octane anime series now streaming.",
            time: "2 hours ago",
            isNew: true,
            image: "/cyberpunk.png"
        },
        {
            id: 2,
            title: "Coming Soon: Neon Genesis Season 2",
            body: "Get ready for the next chapter. Release date confirmed for next Friday.",
            time: "1 day ago",
            isNew: false,
            image: "/hero.png"
        },
        {
            id: 3,
            title: "Recommendation for you",
            body: "Because you watched The Matrix, you might like Blade Runner 2049.",
            time: "3 days ago",
            isNew: false,
            image: null
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Notifications</h1>

                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`flex gap-4 p-4 rounded-lg transition-colors cursor-pointer ${notification.isNew ? "bg-[#1f1f1f] border-l-4 border-[#e50914]" : "bg-[#111] hover:bg-[#1a1a1a]"}`}
                        >
                            <div className="w-24 h-16 bg-gray-800 rounded flex-shrink-0 overflow-hidden relative">
                                {notification.image && <img src={notification.image} alt="" className="w-full h-full object-cover" />}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-semibold text-lg">{notification.title}</h3>
                                <p className="text-gray-400 text-sm mt-1">{notification.body}</p>
                                <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
