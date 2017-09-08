'use strict';
var app = app || {};

(function(module) {
  const cameraModel = {};

cameraModel.properties = [
  {
    name: 'FHAZ',
    title: 'Engineering Hazard Avoidance Cameras (Hazcams)',
    description: '<p>This imagery safeguards against the rover getting lost or inadvertently crashing into unexpected obstacles, and works in tandem with software that allows the rover make its own safety choices and to "think on its own."</p>'
  },
  {
    name: 'NAVCAM',
    title: 'Engineering Navigation Camera (Navcam)',
    description: '<p>The navigation camera unit is a stereo pair of cameras, each with a 45-degree field of view that supports ground navigation planning by scientists and engineers.</p><p>They work in cooperation with the hazard avoidance cameras by providing a complementary view of the terrain.</p>'
  },
  {
    name: 'MAST',
    title: 'Science Cameras',
    description: '<p>Mast Camera takes color images, three-dimensional stereo images, and color video footage of the Martian terrain and has a powerful zoom lens.</p>'
  },
  {
    name: 'CHEMCAM',
    title: 'Science Cameras',
    description: '<p>The Laser-Induced Remote Sensing for Chemistry and Micro-Imaging fires a laser and analyzes the elemental composition of vaporized materials from areas smaller than 0.04 inch on the surface of Martian rocks and soils. </p>'
  },
  {
    name: 'MAHLI',
    title: 'Science Cameras',
    description: '<p>The Mars Hand Lens Imager is the equivalent of a geologist\'s hand lens and provides close-up views of the minerals, textures and structures in Martian rocks and the surface layer of rocky debris and dust. With this new device, earthbound geologists are able to see Martian features smaller than the diameter of a human hair.</p>'
  },
  {
    name: 'MARDI',
    title: 'Descent Imager',
    description: '<p>MARDI (Mars Descent Imager) provides four frame-per-second video at a high resolution during Curiosity\'s landing. The images are "true color," or as the human eye would see.</p><p>In addition to stunning video, the data the camera collected allowed scientists and engineers to: observe geological processes at a variety of scales, sample the horizontal wind profile, create detailed geologic, geomorphic and traverse planning and relief maps of the landing site.</p>'
  },
  {
    name: 'RHAZ',
    title: 'Engineering Hazard Avoidance Cameras (Hazcams)',
    description: '<p>Since the rover may at times move in reverse, hazard avoidance cameras showing the ground view are important. The cameras need to see far to either side because unlike human eyes, the Hazcam cameras cannot move independently; they are mounted directly to the rover body.</p>'
  }
];

cameraModel.stats =  {
    roverName: 'Curiosity rover',
    mName: 'Mars Science Laboratory',
    mDescription: 'To see if Mars ever could have supported small life forms called microbes, and if humans could survive there someday',
    mLength: 'The prime mission lasted one Mars year or about 23 Earth months',
    size: 'About the size of a small SUV -- 10 feet long (not including the arm), 9 feet wide and 7 feet tall',
    reach: 'About 7 feet',
    weight: '2,000 pounds',
    features: 'Geology lab, rocker-bogie suspension, rock-vaporizing laser and lots of cameras',
    launched: '7:02 a.m. PST, Nov. 26, 2011 (10:02 a.m. EST)',
    landed: '10:32 p.m. PDT, Aug. 5, 2012 (1:32 a.m. EDT, Aug. 6, 2012)'
  }

  module.cameraModel = cameraModel;
})(app);
