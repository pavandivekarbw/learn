import BottomSection from "@/components/home/BottomSection";
import MidSection from "@/components/home/MidSection";
import Stats from "@/components/home/Stats";

/**
 * Renders the Home Page component.
 *
 * @returns JSX.Element - A div containing the text "Home Page".
 * @throws No exceptions are thrown.
 */
export default function Home() {
    return (
        <div className="p-5 min-h-screen w-100 h-full flex flex-col gap-3">
            <Stats />
            <MidSection />
            <BottomSection />
        </div>
    );
}
