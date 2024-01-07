import Layout from "../components/Layout";
import React from "react";

const CoC = () => (
  <Layout>
    <div className="textbox">
      <h1 className="my-4 underline text-secondary font-ocra">
        code (o)f conduct
      </h1>
      <div className="text-justify decorate-links">
        <p className="mt-2">
          We are a collective and we want to bring people in the community
          together to exchange ideas, make new friends, and build things as an
          inclusive, welcoming, and safe community.
        </p>
        <p className="mt-2">
          Therefore, any harmful or discriminating behavior by anyone
          (volunteers, organizers, project leads, contributors, hackers, or
          absolutely anyone involved in our community) will not be tolerated and
          results in the offending person(s) being excluded from the group.
        </p>
        <p className="mt-2">
          Members should be judged by their actions, not criteria such as
          degrees, age, race, nationality, sex, sexual orientation, gender,
          gender identity or expression, disability, physical appearance,
          religion (or lack thereof), or position. We are a diverse community.
          Leave your egos at the door.
        </p>
        <h2 className="text-xl font-bold">Be Open</h2>
        <p className="mt-2">
          We welcome one and all. We especially love to adopt newbies in the
          community. We foster decentralized, open communities, society, and
          technology, so we should be open to everyone and everything. We all
          bring different backgrounds and experiences. Great things can happen
          when we show up with an open mind and curiosities to explore. If you
          don't have an open mind, this group is not for you.
        </p>
        <h2 className="text-xl font-bold">Be Respectful</h2>
        <p className="mt-2">
          Be exceptionally kind to others. Respect their work, time, and
          perspectives. Do not insult or troll others, unless it is for banter
          (covered in a later point). We all spend our time, resources, and
          energy to be part of this group. Respect each other, the projects, and
          the process.
        </p>
        <h2 className="text-xl font-bold">Be Daring</h2>{" "}
        <p className="mt-2">
          Dare to create something nobody did before. If you get stuck, ask for
          help - people will help you when you ask. This is a community. We
          create things together.
        </p>
        <h2 className="text-xl font-bold">What We Create</h2>
        <p className="mt-2">
          Promote Decentralization. Build what matters to you. You can organize
          events, build applications, or foster public discourse. You can create
          art and beauty on a computer. Most importantly, create, hack, and
          build together.
        </p>
        <h2 className="text-xl font-bold">Contributions in Other Ways</h2>
        <p className="mt-2">Banter and memeing is encouraged as you see fit.</p>
        <h2 className="text-xl font-bold">Personal Responsibility</h2>
        <p className="mt-2">
          Everyone in this community is responsible for their own tasks. If you
          have a project, it is your responsibility to manage it. We are not
          here to spoon feed you or do your work for you. Ain't nobody got time
          for that. But we are a community and here to support. Always reach out
          if you are having issues with completing a task.
        </p>
        <h2 className="text-xl font-bold">
          Unacceptable Behavior & Harassment
        </h2>{" "}
        <p className="mt-2">
          Unacceptable behavior includes: intimidation, harassment, abuse,
          discrimination, derogatory or demeaning words or actions by any
          participant in our community online or in person. If you have
          disagreements with someone, communicate directly with each other and
          work on a solution.
        </p>
        <p className="mt-2">
          Harassment includes: harmful or prejudicial verbal or written comments
          related to gender, sexual orientation, race, religion, disability;
          inappropriate use of nudity and/or sexual images (including
          presentation slides); inappropriate depictions of violence (including
          presentation slides); deliberate intimidation, stalking or following;
          harassing photography or recording; sustained disruption of talks or
          other events; inappropriate physical contact, and unwelcomed sexual
          attention.
        </p>
        <h2 className="text-xl font-bold">Notify Us</h2>
        <p className="mt-2">
          If you are subject to or witness unacceptable behavior, or have any
          other concerns, you can always notify a project lead, event organizer,
          or member of the core group. Anytime. We will do everything to help
          and support you. If you can't find anyone in person, reach out via
          email:{" "}
          <a href="mailto:escalate@ethberlin.org">escalate@ethberlin.org</a>
        </p>
      </div>
    </div>
  </Layout>
);

export default CoC;
