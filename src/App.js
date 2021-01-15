import './App.css';
import './Styles/application.scss';

function App() {
    window.onload = function () {
        console.log('doc loaded');

        let profile = document.getElementById('pcards');
        let exped1 = document.getElementById('exped1');
        let exped2 = document.getElementById('exped2');
        let exped3 = document.getElementById('exped3');
        let exped4 = document.getElementById('exped4');
        let exped5 = document.getElementById('exped5');
        let exped6 = document.getElementById('exped6');
        let exped7 = document.getElementById('exped7');
        let exped8 = document.getElementById('exped8');

        profile.addEventListener('click', spin);
        exped1.addEventListener('click', drop);
        exped2.addEventListener('click', drop);
        exped3.addEventListener('click', drop);
        exped4.addEventListener('click', drop);
        exped5.addEventListener('click', drop);
        exped6.addEventListener('click', drop);
        exped7.addEventListener('click', drop);
        exped8.addEventListener('click', drop);

        let spun = false;

        function spin() {
            if (spun) {
                this.style.transform = 'rotateY(0deg)';
                spun = false;
            } else {
                this.style.transform = 'rotateY(180deg)';
                spun = true;
            }
        }

        function drop() {
            this.classList.toggle('dropdown');
            setTimeout(() => {
                this.classList.toggle('dropdown');
            }, 6000);
        }
    };
    const heyMate = () => {
        console.log('YUPPP');
    };
    const openModal = (prop) => {
        console.log('openModal', prop);
    };

    return (
        <div className='App'>
            <header>
                <div class='pcards' id='pcards'>
                    <div class='pback'>
                        <img
                            id='profile'
                            src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1552190221/portfolio.jpg'
                            alt="James Hicks's Face"
                        />
                    </div>
                    <div class='pfront'>
                        <div>
                            <h1>[EXPLORE]</h1>
                            <p>^click/tap^</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>JAMES HICKS</h1>
                </div>
            </header>
            <main>
                <div class='main item1'>
                    <h3 class='quote'>
                        I'm a Full Stack Web Developer whose journey is paved by
                        an <em>explorative</em>
                        nature...
                    </h3>
                    <p>
                        This key quality drives me to search for answers and
                        solutions, unwavering at the size of each figurative
                        mountain, as I ascend with a force that grows along with
                        the peaks that are conquered. With the tools available I
                        create expeditions to lead myself or a team on a clear
                        path that ensures we return with the results of our
                        master's request. Currently, I ascend the peaks daily in
                        the form of challenges through my Trademark{' '}
                        <a>Undoing Perfectionism</a>. However I must find a new
                        base camp to in order to explore and ascend to higher
                        peaks...
                    </p>
                </div>
                <div class='main item2'>
                    <h3 class='quote'>
                        <em>For years I stood divided...</em>
                    </h3>
                    <br />
                    <br />
                    <p>
                        Previously I worked in warehouse environments, in order
                        to fund my personal expeditions as a musician. My growth
                        was a slow process in these two realms, however, as I
                        lived in a world of black and white. Though with
                        exploration I found{' '}
                        <strong class='colour2'>
                            colour beneath the surface
                        </strong>
                        . I found a career path that feeds my curiosity,
                        provides endless learning opportunities, and certainty
                        in presenting mountains higher than I'd ever overcome.
                        With eagerness I look to the conquer these new peaks so
                        that I may grow as their height becomes greater with
                        each expedition. I'm in the tech world now, ever
                        exploring...
                    </p>
                </div>
                <div class='main' id='item3'>
                    <div class='content'>
                        <a
                            href='https://brisband.herokuapp.com/'
                            target='_blank'
                        >
                            <h3>BrisBand</h3>
                        </a>
                        <h5>
                            2-Sided Social Marketplace | Ruby on Rails |
                            Full-Stack
                        </h5>
                        <br />
                        <p>
                            BrisBand is a social platform to connect musicians,
                            sharing their love for equipment through posting,
                            commenting and messaging features available after
                            account creation. The posted items can be marked for
                            sale by the owner at any time. This project taught
                            us the value of scoping effectively, having
                            successfully produced an MVP before expanding.
                        </p>
                        <br />
                    </div>
                    <div class='overlay' id='exped1'>
                        <h2 class=''>EXPEDITION #1</h2>
                    </div>
                </div>
                <div class='main' id='item4'>
                    <div class='content'>
                        <a
                            href='https://five-star-mowing.herokuapp.com/'
                            target='_blank'
                        >
                            <h3>Five Star Mowing</h3>
                        </a>
                        <h5>
                            Business Website | ReactJS + NodeJS | Full-Stack
                        </h5>
                        <br />
                        <p>
                            For our last assignment on bootcamp, we were tasked
                            with finding a real-world client to build a product
                            for over 3 weeks. We were excited to build a
                            solution for a local business. We provided
                            functionality for organising property inspections
                            through a quote form, which is filled out by
                            visitors to the site. It is then emailed to the
                            business owner when submitted.{' '}
                        </p>
                        <br />
                    </div>
                    <div class='overlay' id='exped2'>
                        <h2 class=''>EXPEDITION #2</h2>
                    </div>
                </div>
                <div class='main' id='item5'>
                    <div class='content'>
                        {/* <button onClick={() => heyMate()}>CLICK</button> */}
                        <h3 onClick={() => openModal('exped3')}>
                            Data Cleanse
                        </h3>
                        <h5>CRM Feature | ReactJS + PHP | Full-Stack</h5>
                        <br />
                        <p>
                            The CRM was filled with duplicate records, so we
                            created a report of potential duplicates which
                            highlighted the conflicting fields of 2 records.
                            From there, a user could select a row in the table
                            which would pop-up another screen to view both
                            records in detail. On this screen the user could opt
                            to keep details from either record, and merge them
                            together - keeping all historical donations and
                            interactions in tact. This allowed the CRM records
                            to be much more accurate, saving thousands of
                            potential missed or doubled-up EDMs.
                        </p>
                        <br />
                    </div>
                    <div class='overlay' id='exped3'>
                        <h2 class=''>EXPEDITION #3</h2>
                    </div>
                </div>
                <div class='main' id='item6'>
                    <div class='content'>
                        <h3>Donations Query Tool</h3>
                        <h5>Data Filter Tool | React JS + PHP | Full-Stack</h5>
                        <br />
                        <p>
                            Using elasticsearch as an indexing tool to for
                            quick-querying, we built out a front-end display
                            panel for the donation data. The user could filter
                            the data based on a variety of pre-defined filters
                            e.g date, amount, CRM Source properties. Results
                            could be exported as CSV. This provided Finance and
                            Fundraising with accurate lists for reporting and
                            EDMs.
                        </p>
                        <br />
                    </div>
                    <div class='overlay' id='exped4'>
                        <h2 class=''>EXPEDITION #4</h2>
                    </div>
                </div>
                <div class='main' id='item7'>
                    <div class='content'>
                        <h3>Source Tags</h3>
                        <h5>CRM Feature | ReactJS + PHP | Project Lead</h5>
                        <br />
                        <p>
                            To boost the power of the existing Donation Query
                            Tool, a filter was added to enable Sources (CRM
                            records) to be segmented for targeted Emails and
                            data collection. It required new interfaces at
                            Source creation and edit points on the front-end,
                            and automation on the back-end depending primarily
                            on Source donation activity. This improved reporting
                            data, visualization of donor activity and
                            communication efficiency for the Fundraising Team.
                        </p>
                        <br />
                    </div>
                    <div class='overlay' id='exped5'>
                        <h2 class=''>EXPEDITION #5</h2>
                    </div>
                </div>
                <div class='main' id='item8'>
                    <div class='content'>
                        <a
                            href='https://locations.orangesky.org.au'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <h3>Locations Finder</h3>
                        </a>
                        <h5>
                            Service Location Tool | ReactJS + PHP | Back-End
                        </h5>
                        <br />
                        <p>
                            In order to assist friends in finding services in
                            their area, we built a mobile and web friendly
                            location finder. A user can opt to use their device
                            location or search by city or suburb. Each result is
                            displayed with upcoming service types, times and
                            status. Using a simple iframe of Google maps, we
                            were able to inject the selected location data for
                            quick-reference and link-out for directions. Now
                            less friends miss out on clean laundry and
                            meaningful conversations.
                        </p>
                        <br />
                    </div>

                    <div class='overlay' id='exped6'>
                        <h2 class=''>EXPEDITION #6</h2>
                    </div>
                </div>
                <div class='main' id='item9'>
                    <div class='content'>
                        <h3>Bulk Transaction Uploader </h3>
                        <h5>Finance Tool | ReactJS + PHP | Back-End</h5>
                        <br />
                        <p>
                            As direct-debit payments were required to be entered
                            into our system individually, we built a CSV upload
                            tool that would handle all formats from different
                            banks, and assign the payments to a Source in the
                            CRM. After uploading, the user would be notified of
                            successful, failed or repeated uploads. The outcome
                            was an improvement in direct-debit processing time
                            from 8hrs down to 1hr a week.
                        </p>
                        <br />
                    </div>
                    <div class='overlay' id='exped7'>
                        <h2 class=''>EXPEDITION #7</h2>
                    </div>
                </div>
                <div class='main' id='item10'>
                    <div class='content'>
                        <h3>Funraisin </h3>
                        <h5>API Integration | ReactJS + PHP | Project Lead</h5>
                        <br />
                        <p>
                            In order to effectively love and thank the donors of
                            The Sudsy Challenge 2020, data from Funraisin needed
                            to be mirrored into Orange Sky's custom CRM. This
                            was done by configuring scripts to use the Funraisin
                            API and Webhooks to sync all the data effectively.
                            The information was then displayed in a manner that
                            was optimized for the Fundraising team members'
                            needs.
                        </p>
                        <br />
                    </div>
                    <div class='overlay' id='exped8'>
                        <h2 class=''>EXPEDITION #8</h2>
                    </div>
                </div>
                <div class='main item11'>
                    <div class='content'>
                        Explore my
                        <br /> work...
                        <a
                            href='https://github.com/thehicksivist?tab=repositories'
                            target='_blank'
                        >
                            <img
                                class='icon links '
                                src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1542251522/if_Github-line-transparent_2061709.png'
                                alt='GitHub Repositories'
                            />
                        </a>
                    </div>
                    <div class='content'>
                        Explore my
                        <br /> people...
                        <a
                            href='https://www.linkedin.com/in/james-hicks-7b5a9416a/'
                            target='_blank'
                        >
                            <img
                                class='icon links '
                                src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1542251522/if_LinkedIn-line-transparent_2061702.png'
                                alt='LinkedIn Profile'
                            />
                        </a>
                    </div>
                    <div class='content'>
                        Explore my
                        <br /> journey...
                        <a
                            href='https://www.instagram.com/james_and_the_giant_brackets/'
                            target='_blank'
                        >
                            <img
                                class='icon links '
                                src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1542251522/if_instagram-square-flat-3_1620014.png'
                                alt='Instagram Account'
                            />
                        </a>
                    </div>

                    <div class='content'>
                        Explore
                        <br /> with me!
                        <a
                            href='mailto:hicks.a.james@gmail.com'
                            target='_blank'
                        >
                            <img
                                class='icon links '
                                src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1542251522/if_mail_328046.png'
                                alt='Contact Email'
                            />
                        </a>
                    </div>
                </div>
            </main>

            <footer>
                <h4 class='colour3 '>_CLICK BELOW FOR MY RESUME_</h4>
                <a
                    href='https://drive.google.com/open?id=1gvUc48lTanw0pquN26SKT1IUUCF-GfVd'
                    target='_blank'
                >
                    {'james_and_the_giant_brackets'}
                </a>
            </footer>
        </div>
    );
}

export default App;
