import {useTrail, animated as a } from "react-spring";
import styles from './trail.module.scss'
import React from "react";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 2, tension: 1000, friction: 600, delay: 500},
      opacity: open ? 1 : 0,
      x: open ? 0 : 40,
      delay: 1000,
      height: open ? 60 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }

export default Trail;