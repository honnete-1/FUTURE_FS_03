import InfoPage from "@/components/layout/InfoPage";

export default function HelpPage() {
    return (
        <InfoPage title="Help Center">
            <p>Welcome to Net Moviex Help Center. How can we verify you today?</p>
            <h3 className="text-xl font-bold mt-6 mb-2">Popular Topics</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li>How to change your password</li>
                <li>Managing your subscription</li>
                <li>Parental controls</li>
                <li>Troubleshooting playback issues</li>
            </ul>
        </InfoPage>
    );
}
