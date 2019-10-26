import React from 'react';

const About = () => {
  return (
    <div className="container">
      <section className="pronounce">
        <div>
          <h1>Understanding Pronunciation</h1>
          <p>
            One the most important that the myself and others worry about is
            mispronouncing people&#39;s names. As a way to avoid this
            embarrasment I&#39;ve decided to make this site as a way to aid with
            that. The main purpose of the site it to aid in pronunciation, so
            upon creating terms you can see the relevant phonetics by hovering
            over the term. You can also hear how said term is pronounced as well
            by clicking on the term. All in all, I want to create an experience
            that makes it easy to understand pronunciation.
          </p>
        </div>
        <img src="/dictionary.jpg" alt="dictionary" height="250" />
      </section>
      <section className="collections">
        <div>
          <h1>Collections</h1>
          <p>
            One of the advantages of using Name Aid is that you are able to
            create collections for your terms. This allows for you to organize
            the terms you make in whatever way you see fit. For example, you can
            organize your terms by classes, creating a collection for each
            class. You can then go on to share those collections with whomever
            you please. Creating and sharing collections allows for you to have
            the most control over what you create and what you want to share.
          </p>
        </div>
        <img src="/bookcase.jpg" alt="a bookcase" height="250" />
      </section>
    </div>
  );
};

export default About;
