'use client';
import { ActivityCard } from '@/components/activity-card';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import Markdown from 'react-markdown';
import { EmailButton } from '@/components/ui/Buttons/emailButton';
import { LandingGallery } from '@/components/ui/Galleries/LandingGallery/landingGallery';
import TypingAnimation from '@/components/magicui/typing-animation';
import { SkillsCloud } from '@/components/ui/Animations/SkillsCloud/skillsCloud';
import { motion } from 'framer-motion';
import SocialProof from '@/components/ui/Banners/social-proof';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFade delay={BLUR_FADE_DELAY}>
                                <TypingAnimation
                                    className="text-3xl text-left font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                    text={"Hi, I'm Ve Sharma"}
                                />
                            </BlurFade>
                            <BlurFadeText className="max-w-[600px] md:text-xl " delay={BLUR_FADE_DELAY} text={DATA.description} />
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <Avatar className="size-28 border">
                                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>
                </div>

                <section id="photos">
                    <LandingGallery />
                </section>
            </section>
            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-xl font-bold">About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                        {DATA.summary}
                    </Markdown>
                </BlurFade>
            </section>
            <section id="experience">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Experience</h2>
                    </BlurFade>
                    {DATA.experience.map((experience, id) => (
                        <BlurFade key={experience.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                            <ResumeCard
                                key={experience.company}
                                logoUrl={experience.logoUrl}
                                altText={experience.company}
                                title={experience.company}
                                subtitle={experience.title}
                                href={experience.href}
                                badges={experience.badges}
                                period={`${experience.start} - ${experience.end ?? 'Present'}`}
                                description={experience.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Education</h2>
                    </BlurFade>
                    {DATA.education.map((education, id) => (
                        <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                            <ResumeCard
                                key={education.school}
                                href={education.href}
                                logoUrl={education.logoUrl}
                                altText={education.school}
                                title={education.school}
                                subtitle={education.degree}
                                period={`${education.start} - ${education.end}`}
                                description={education.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
            <section id="certifications">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-xl font-bold">Certifications</h2>
                    </BlurFade>
                    {DATA.certifications.map((certification, id) => (
                        <BlurFade key={certification.name} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                            <ResumeCard
                                key={certification.about}
                                href={certification.href}
                                logoUrl={certification.logoUrl}
                                altText={certification.about}
                                title={certification.name}
                                subtitle={certification.about}
                                period={`${certification.start} - ${certification.end}`}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap gap-1">
                        {DATA.skills.map((skill, id) => (
                            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <Badge key={skill}>{skill}</Badge>
                                </motion.div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="skills-cloud">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <SkillsCloud />
                </div>
            </section>
            <section id="news-articles">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">News Articles</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Checkout where I've been featured!</h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hear what the media is saying about myself and my companies!
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.newsArticles.map((project, id) => (
                            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.categories}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    I&apos;ve worked on a variety of projects, from simple websites to full-stack web applications, and cloud
                                    optimization. Here are a few of my favorites.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects.map((project, id) => (
                            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="thought-leadership">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 17}>
                        <h1 className="text-3xl font-bold">Tech Ecosystem & Thought Leadership</h1>
                    </BlurFade>
                    <div className="space-y-4">
                        {DATA.thoughtLeadership.map((item, id) => (
                            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 18 + id * 0.05}>
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <div className="p-4 border rounded-lg shadow-md">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="activities">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Beyond the Code</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    I love community building and keeping productive outside of my main work
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    "I'm passionate about sharing knowledge, engaging with other developers, and contributing to the tech community.
                                    Here's a glimpse at some of my recent activities."
                                </p>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                            {DATA.activities.map((activity, id) => (
                                // TODO: Address the undefined issue error.
                                // @ts-expect-error this won't return undefined
                                <BlurFade key={activity.title + activity.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                                    <motion.div whileHover={{ scale: 1.1 }}>
                                        <ActivityCard
                                            // @ts-expect-error this won't return undefined
                                            title={activity.title}
                                            // @ts-expect-error this won't return undefined
                                            description={activity.description}
                                            // @ts-expect-error this won't return undefined
                                            location={activity.location}
                                            // @ts-expect-error this won't return undefined
                                            dates={activity.dates}
                                            // @ts-expect-error this won't return undefined
                                            image={activity.image}
                                            // @ts-expect-error this won't return undefined
                                            links={activity.links}
                                        />
                                    </motion.div>
                                </BlurFade>
                            ))}
                        </ul>
                    </BlurFade>
                </div>
            </section>

            {/* <LogoCard /> */}
            <section id="backed-by">
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <SocialProof />
                </BlurFade>
            </section>
            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Want to chat? Just shoot me an email and I&apos;ll respond usually within 24-48 hours.
                            </p>
                            <EmailButton />
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
