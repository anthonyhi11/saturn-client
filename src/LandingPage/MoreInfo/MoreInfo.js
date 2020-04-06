import React from "react";
import "./MoreInfo.css";
import { useHistory } from "react-router-dom";

export default function MoreInfo(props) {
  let history = useHistory();

  return (
    <div className="moreInfo-body">
      <h2>What is Saturn?</h2>
      <p className="moreInfo-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ante
        quis erat posuere rhoncus ullamcorper commodo orci. Donec luctus eros ac
        ipsum fringilla lacinia. Suspendisse aliquam malesuada fringilla. Proin
        ipsum sem, pulvinar sed nisl vel, lacinia gravida turpis. Cras elementum
        elit lacus, a viverra libero blandit quis. Nam viverra commodo blandit.
        Nulla interdum id neque id suscipit. Suspendisse quis efficitur purus.
        Cras suscipit vehicula arcu, sed dapibus orci ultricies nec. Ut a
        rhoncus sem. Donec at pulvinar magna, vel ultrices mauris. Vivamus
        dapibus nisl bibendum leo tincidunt, a malesuada odio cursus. Morbi
        placerat malesuada nisi ut mattis. Sed at congue sem, et suscipit neque.
      </p>
      <h2>How do I use it?</h2>
      <div className="how-to-p">
        <p className="how-to-p-p">
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="how-to-p-p">
          2. Donec at ante quis erat posuere rhoncus ullamcorper commodo orci.
          Donec luctus eros ac ipsum fringilla lacinia
        </p>
        <p className="how-to-p-p">
          3. Donec at ante quis erat posuere rhoncus ullamcorper commodo orci.
          Donec luctus eros ac ipsum fringilla lacinia
        </p>
        <p className="how-to-p-p">
          4. Donec at ante quis erat posuere rhoncus ullamcorper commodo orci.
          Donec luctus eros ac ipsum fringilla lacinia
        </p>
      </div>
      <h2 className="any-questions">Any Questions?</h2>
      <p>
        Drop us a{" "}
        <a href="mailto:antdavhill@gmail.com?Subject=Questions%20about%20Saturn...">
          line!
        </a>
      </p>
      <button onClick={e => history.go(-1)}>Back</button>
    </div>
  );
}
