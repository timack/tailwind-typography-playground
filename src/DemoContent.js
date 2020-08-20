import React, { Component } from 'react'

export default class DemoContent extends Component {
    render() {
        return (
            <React.Fragment>

                <h1>Aliens</h1>

                <h2>The greatest movie of all time.</h2>

                <img src="/images/aliens-film-wallpaper-full-hd-1080p-149017.jpg" alt=""/>

                <h3>Synopsis</h3>

                <p>57 years after Ellen Ripley had a close encounter with the reptilian alien creature from the first movie, she is called back, this time, to help a group of highly trained colonial marines fight off against the sinister extraterrestrials. But this time, the aliens have taken over a space colony on the moon LV-426. When the colonial marines are called upon to search the deserted space colony, they later find out that they are up against more than what they bargained for. Using specially modified machine guns and enough firepower, it's either fight or die as the space marines battle against the aliens. As the Marines do their best to defend themselves, Ripley must attempt to protect a young girl who is the sole survivor of the decimated space colony.</p>

                <blockquote>
                    <p><strong>Burke:</strong> Hold on, hold on just a second. This installation has a substantial dollar value attached to it.</p>
                    <p><strong>Ripley:</strong> They can *bill* me.</p>
                </blockquote>

                <h3>Script</h3>

                <pre style={{whiteSpace: 'pre-wrap'}}>
Silent and endless.  The stars shine like the love of
God...cold and remote.  Against them drifts a tiny chip
of technology.

CLOSER SHOT  It is the NARCISSUS, lifeboat of the
ill-fated star-freighter Nostromo.  Without interior
or running lights it seems devoid of life.  The PING
of a RANGING RADAR grows louder, closer.  A shadow
engulfs the Narcissus.  Searchlights flash on, playing
over the tiny ship, as a MASSIVE DARK HULL descends
toward it.
                </pre>

                <ul>
                    <li>Unordered Item 1</li>
                    <li>Unordered Item 2</li>
                    <li>Unordered Item 3</li>
                </ul>
                <ol>
                    <li>Ordered Item 1</li>
                    <li>Ordered Item 2</li>
                    <li>Ordered Item 3</li>
                </ol>

                <h3>Cast</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sigourney Weaver</td>
                            <td>Ripley</td>
                        </tr>
                        <tr>
                            <td>Carrie Henn</td>
                            <td>Newt</td>
                        </tr>
                        <tr>
                            <td>Michael Biehn</td>
                            <td>Corporal Hicks</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
