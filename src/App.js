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
        let tools = document.getElementById('tools');

        profile.addEventListener('click', spin);
        exped1.addEventListener('click', drop);
        exped2.addEventListener('click', drop);
        exped3.addEventListener('click', drop);
        exped4.addEventListener('click', drop);
        exped5.addEventListener('click', drop);
        exped6.addEventListener('click', drop);
        tools.addEventListener('click', drop);

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
                        <button onClick={() => heyMate()}>CLICK</button>
                        <h3 onClick={() => openModal('exped3')}>
                            Data Cleanse
                        </h3>
                        <h5>
                            Duplicate Report and Merge Tool | ReactJS + PHP |
                            Full-Stack
                        </h5>
                        <br />
                        <p>
                            created a repotr print-out of potential duplicates
                            and the field which has suspected duplicate data -
                            enabled the user to merge 2 source records, choosing
                            which properties to keep from each record
                        </p>
                        <br />
                    </div>
                    <div class='overlay' id='exped3'>
                        <h2 class=''>EXPEDITION #3</h2>
                        <p>(click the project name for screenshots)</p>
                    </div>
                </div>
                <div class='main' id='item6'>
                    <div class='content'>
                        <a
                            href='https://five-star-mowing.herokuapp.com/'
                            target='_blank'
                        >
                            <h3>Donations Query Tool</h3>
                        </a>
                        <h5>
                            Business Website | React JS + Node JS | Team Project
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
                    <div class='overlay' id='exped4'>
                        <h2 class=''>EXPEDITION #4</h2>
                    </div>
                </div>
                <div class='main' id='item7'>
                    <div class='content'>
                        <a
                            href='https://brisband.herokuapp.com/'
                            target='_blank'
                        >
                            <h3>Source Tags</h3>
                        </a>
                        <h5>
                            2-Sided Social Marketplace | Ruby on Rails | Team
                            Project
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
                    <div class='overlay' id='exped5'>
                        <h2 class=''>EXPEDITION #5</h2>
                    </div>
                </div>
                <div class='main' id='item8'>
                    <div class='content'>
                        <a
                            href='https://five-star-mowing.herokuapp.com/'
                            target='_blank'
                        >
                            <h3>Bulk Upload Txns</h3>
                        </a>
                        <h5>
                            Business Website | React JS + Node JS | Team Project
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
                    <div class='overlay' id='exped6'>
                        <h2 class=''>EXPEDITION #6</h2>
                    </div>
                </div>
                <div class='main item9'>
                    <div class='content '>
                        The Map...
                        <img
                            class='icon'
                            src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1542251610/if_14_939747.png'
                            alt='VScode Logo'
                        />
                    </div>
                    <div class='content '>
                        The Rucksack...
                        <img
                            class='icon'
                            src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1542251522/if_github_308438.png'
                            alt='GitHub Logo1'
                        />
                    </div>
                    <div class='content '>
                        The Journal...
                        <img
                            class='icon'
                            src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1542251610/if_simplenote_334747.png'
                            alt='Simplenote Logo'
                        />
                    </div>
                    <div class='content '>
                        The Compass...
                        <img
                            class='icon'
                            src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1542251521/if_Trello-line-transparent_2061693.png'
                            alt='Trello Logo'
                        />
                    </div>
                    <div class='overlay' id='tools'>
                        <h2 class=''>
                            TOOLS OF
                            <br />
                            EXPLORATION
                        </h2>
                    </div>
                </div>
                <div class='main item10'>
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
