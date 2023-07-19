import { useCallback } from "react";
import Footer from "./Footer";
import styles from "./Calculator.module.css";
const Calculator = () => {
  const onGroupContainer9Click = useCallback(() => {
    // Please sync "Calculator-as a personal" to the project
  }, []);

  const onGroupContainer11Click = useCallback(() => {
    // Please sync "Calculator-as a my trip" to the project
  }, []);

  const onGroupContainer18Click = useCallback(() => {
    // Please sync "Calculator-as a company usecase" to the project
  }, []);

  return (
    <main className={styles.calculator}>
      <div className={styles.bg1Parent}>
        <div className={styles.bg1Parent} id="banner">
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.bg1Child} />
        </div>
        <div className={styles.bannerContent}>
          <div className={styles.calculateYourCarbonContainer}>
            <b>{`Calculate `}</b>
            <span>your</span>
            <b>{` Carbon `}</b>
            <span>Emission</span>
          </div>
        </div>
        <nav className={styles.rectangleParent} id="nav">
          <div className={styles.groupChild} />
          <div className={styles.groupParent}>
            <img className={styles.groupItem} alt="" src="/group-16.svg" />
            <div className={styles.groupContainer}>
              <div className={styles.solutionsParent}>
                <div className={styles.solutions}>{`Solutions `}</div>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <div className={styles.buyBnz}>Buy BNZ</div>
              <div className={styles.buyBnz}>Know more</div>
              <div className={styles.buyBnz}>FAQ</div>
              <div className={styles.buyBnz}>About us</div>
            </div>
          </div>
          <img
            className={styles.group26110772}
            alt=""
            src="/group-2611077-2@2x.png"
          />
        </nav>
      </div>
      <div className={styles.calculatorInner}>
        <div className={styles.textParent}>
          <div className={styles.text}>Calculate by your choice</div>
          <div className={styles.text1}>
            <p className={styles.weHaveDesigned}>
              We have designed a range of carbon footprint calculators to assess
              your CO2 emissions through a series of
            </p>
            <p className={styles.weHaveDesigned}>
              <span>{`simple questions – whatever your sector or the type of activity you want to offset. Together, let’s `}</span>
              <span className={styles.becomeNetZero}>Become net zero!</span>
            </p>
          </div>
          <div className={styles.groupDiv}>
            <div
              className={styles.rectangleGroup}
              onClick={onGroupContainer9Click}
            >
              <div className={styles.groupInner} />
              <div className={styles.completeTheFollowingCalculaGroup}>
                <div className={styles.completeTheFollowingCalculaParent}>
                  <div className={styles.completeTheFollowingContainer}>
                    <p
                      className={styles.weHaveDesigned}
                    >{`Complete the following calculator to calculate `}</p>
                    <p className={styles.weHaveDesigned}>
                      the carbon footprint of your company.
                    </p>
                  </div>
                  <div className={styles.myPersonalFootprint}>
                    My Personal Footprint
                  </div>
                </div>
                <div className={styles.groupParent2}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild1} />
                      <div className={styles.groupChild2} />
                    </div>
                  </div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild3} />
                    <img className={styles.groupIcon} alt="" src="/group.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.rectangleParent3}
              onClick={onGroupContainer11Click}
            >
              <div className={styles.groupChild4} />
              <div className={styles.completeTheFollowingCalculaGroup}>
                <div className={styles.completeTheFollowingContainer1}>
                  <p
                    className={styles.weHaveDesigned}
                  >{`Complete the following calculator to calculate `}</p>
                  <p className={styles.weHaveDesigned}>
                    the carbon footprint of your company.
                  </p>
                </div>
                <div className={styles.myTripsFootprint}>
                  My Trips Footprint
                </div>
                <img
                  className={styles.groupParent2}
                  alt=""
                  src="/group-2611504.svg"
                />
              </div>
            </div>
            <div
              className={styles.rectangleParent4}
              onClick={onGroupContainer18Click}
            >
              <div className={styles.groupChild4} />
              <div className={styles.completeTheFollowingCalculaGroup}>
                <div className={styles.completeTheFollowingCalculaParent}>
                  <div className={styles.completeTheFollowingContainer}>
                    <p
                      className={styles.weHaveDesigned}
                    >{`Complete the following calculator to calculate `}</p>
                    <p className={styles.weHaveDesigned}>
                      the carbon footprint of your company.
                    </p>
                  </div>
                  <div className={styles.myCompanyFootprint}>
                    My Company Footprint
                  </div>
                </div>
                <div className={styles.groupParent2}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild1} />
                      <div className={styles.groupChild2} />
                    </div>
                  </div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild3} />
                    <img
                      className={styles.groupIcon1}
                      alt=""
                      src="/group1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.groupFooter}>
        <Footer />
        <div className={styles.aboutUsParent}>
          <div className={styles.aboutUs1}>About us</div>
          <div className={styles.home}>Home</div>
          <div className={styles.blogsNews}>{`Blogs & News`}</div>
          <div className={styles.projectDevelopers}>Project developers</div>
          <div className={styles.faq1}>FAQ</div>
          <div className={styles.corporations}>Corporations</div>
          <div className={styles.contactUs}>Contact us</div>
          <div className={styles.individuals}>Individuals</div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-2@2x.png" />
            <img className={styles.frameChild} alt="" src="/ellipse-3@2x.png" />
            <img className={styles.frameInner} alt="" src="/ellipse-4@2x.png" />
            <img className={styles.frameChild} alt="" src="/ellipse-5@2x.png" />
            <img
              className={styles.frameChild}
              alt=""
              src="/ellipse-51@2x.png"
            />
          </div>
          <img
            className={styles.group261107711}
            alt=""
            src="/group-2611077-1-1@2x.png"
          />
        </div>
      </footer>
    </main>
  );
};

export default Calculator;
