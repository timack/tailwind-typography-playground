/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class DemoContent extends Component {

  createStyle = (font) => {
    if (!font) return;

    let styleObj = {};
    if (font.family) {
      styleObj.fontFamily = font.family;
    }

    if (font.variant) {
      const variant = font.variant;

      if (variant.indexOf('italic') > -1) {
        styleObj.fontStyle = 'italic';
      }

      if (variant.indexOf('regular') > -1) {
        styleObj.fontWeight = 'normal';
      }

      if (!Number.isNaN(parseInt(variant))) {
        styleObj.fontWeight = parseInt(variant);
      }
    }

    return styleObj;
  };

  render() {
    const { headingFont, bodyFont } = this.props;

    const headingStyle = this.createStyle(headingFont);
    const bodyStyle = this.createStyle(bodyFont);

    return (
      <div style={bodyStyle}>
        <h1 style={headingStyle}>Aliens</h1>

        <figure>
          <img
            src="/images/aliens-film-wallpaper-full-hd-1080p-149017.jpg"
            alt=""
            className="rounded"
          />
          <figcaption>
            Ripley (Sigourney Weaver) gets a shooting lesson from Corporal Hicks
            (Michael Biehn).
          </figcaption>
        </figure>

        <h2 style={headingStyle}>The greatest movie of all time.</h2>

        <h3 style={headingStyle} id="synopsis">
          Synopsis
        </h3>

        <p>
          57 years after Ellen Ripley had a close encounter with the reptilian
          alien creature from the first movie, she is called back, this time, to
          help a group of highly trained colonial marines fight off against the
          sinister extraterrestrials. But this time, the aliens have taken over
          a space colony on the moon LV-426.
        </p>
        <p>
          When the colonial marines are called upon to search the deserted space
          colony, they later find out that they are up against more than what
          they bargained for.{" "}
          <strong>
            Using specially modified machine guns and enough firepower, it's
            either fight or die as the space marines battle against the aliens.
          </strong>{" "}
          As the Marines do their best to defend themselves, Ripley must attempt
          to protect a young girl who is the sole survivor of the decimated
          space colony.
        </p>
        <p>
          Find out more on{" "}
          <a
            href="https://www.imdb.com/title/tt0090605"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDB.com
          </a>
        </p>

        <blockquote>
          <p>
            <strong>Burke:</strong> Hold on, hold on just a second. This
            installation has a substantial dollar value attached to it.
          </p>
          <p>
            <strong>Ripley:</strong> They can *bill* me.
          </p>
        </blockquote>

        <h3 style={headingStyle} id="script">
          Script
        </h3>

        <pre style={{ whiteSpace: "pre-wrap" }}>
          Silent and endless. The stars shine like the love of God...cold and
          remote. Against them drifts a tiny chip of technology. CLOSER SHOT It
          is the NARCISSUS, lifeboat of the ill-fated star-freighter Nostromo.
          Without interior or running lights it seems devoid of life. The PING
          of a RANGING RADAR grows louder, closer. A shadow engulfs the
          Narcissus. Searchlights flash on, playing over the tiny ship, as a
          MASSIVE DARK HULL descends toward it.
        </pre>

        <h3 style={headingStyle} id="awards">
          Awards
        </h3>

        <ul>
          <li>
            <strong>Academy Awards</strong>
            <ul>
              <li>Sound Effects Editing</li>
              <li>Visual Effects</li>
            </ul>
          </li>
          <li>
            <strong>BAFTA</strong>
            <ul>
              <li>Visual Effects</li>
            </ul>
          </li>
          <li>
            <strong>Saturns</strong>
            <ul>
              <li>Best Science Fiction Film</li>
              <li>Best Actress (Sigourney Weaver)</li>
              <li>Best Supporting Actor (Bill Paxton)</li>
              <li>Best Supporting Actress (Jeanette Goldstein)</li>
              <li>Best Performance by a Younger Actor (Carrie Henn)</li>
              <li>Best Direction (James Cameron)</li>
              <li>Best Writing (James Cameron)</li>
              <li>Best Special Effects</li>
            </ul>
          </li>
        </ul>

        <h3 style={headingStyle} id="cast">
          Cast
        </h3>
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
            <tr>
              <td>Paul Reiser</td>
              <td>Burke</td>
            </tr>
            <tr>
              <td>Lance Henriksen</td>
              <td>Bishop</td>
            </tr>
            <tr>
              <td>Bill Paxton</td>
              <td>Private Hudson</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
