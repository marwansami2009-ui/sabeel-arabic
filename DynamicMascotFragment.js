// ♞ Dynamic Glass Knight Mascot
const DynamicMascot = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate opacity/color based on scroll
    // At top (0): Black/Dark (opacity 1 for dark icon)
    // Scrolled (>50): White/Glow (opacity 1 for light icon)
    const isScrolled = scrollY > 50;

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isScrolled ? 'filter drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' : ''}`}>
            <div className={`glass-panel p-3 rounded-full flex items-center justify-center transition-all duration-500 ${isScrolled ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'}`}>
                <GlassIcon
                    name="flame" // Using flame/knight metaphor
                    size={32}
                    className={`transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-black'}`}
                />
            </div>
        </div>
    );
};
