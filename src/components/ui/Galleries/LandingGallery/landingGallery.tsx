import BlurFade from '@/components/magicui/blur-fade';
import { motion } from 'framer-motion';

const localImagesDataStore = [
    '/photo_gallery/github_universe.jpg',
    '/photo_gallery/github_hq.jpg',
    '/photo_gallery/gdsg_fireside_chat.JPG',
    '/photo_gallery/google_happy_hour_io.JPG',
    '/photo_gallery/msft_booth_ghu.jpg',
    '/photo_gallery/google_next.JPG',
    '/photo_gallery/men_in_tech.jpeg',
    '/photo_gallery/imprint_ve.JPG',
    '/photo_gallery/ms_adauris_offices.JPG',
    '/photo_gallery/startup_fest.jpg',
    '/photo_gallery/ment_in_tech_pannel.JPG',
    '/photo_gallery/ygg_ve_and_apollo.png',
    '/photo_gallery/canada_day_panel_2.png'
];

export function LandingGallery() {
    return (
        <section id="photos">
            <div className="columns-2 gap-4 sm:columns-3">
                {localImagesDataStore.map((imageUrl, idx) => (
                    <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <img className="mb-4 size-full rounded-lg object-contain" src={imageUrl} alt={`Random stock image ${idx + 1}`} />
                        </motion.div>
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
