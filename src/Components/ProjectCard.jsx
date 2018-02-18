import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';

const ProjectCard = props => (
  <figure className="col-md-4 mt-4">
    <a className="text-success" href={props.url} target="_blank">
      <CloudinaryContext cloudName="dikaeinstein">
        <Image
          publicId={props.imgUrl}
          alt={props.name}
          className="img-fluid rounded"
        >
          <Transformation quality="100" width="600" crop="scale" dpr="auto" />
        </Image>
      </CloudinaryContext>
      <figcaption className="text-center text-md-left">
        {props.name}
      </figcaption>
    </a>
  </figure>
);

ProjectCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;
