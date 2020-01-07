import React from 'react';
import _ from 'lodash';

import {safePrefix, htmlToReact, markdownify} from '../utils';

export default class Merchandise extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.background_style')}>
                {_.map(_.get(this.props, 'section.merchandise'), (merchandise, merchandise_idx) => (
                    <section key={merchandise_idx} className="merchandise">
                        {_.get(merchandise, 'home_img_path') && 
                            <div className="image"><img src={safePrefix(_.get(merchandise, 'home_img_path'))} alt="" /></div>
                        }
                        <div className="content">
                            <h2>{htmlToReact(_.get(merchandise, 'title').replace(/\n/g, '<br />'))}</h2>
                            {markdownify(_.get(merchandise, 'text'))}
                        </div>
                    </section>
                ))}
            </section>
        );
    }
}
