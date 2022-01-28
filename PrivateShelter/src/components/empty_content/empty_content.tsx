import React from 'react';

import './empty_content.scss';

type EmptyContentProps = {
    entityLabel: string;
};

function EmptyContent({ entityLabel }: EmptyContentProps) {
    return (
        <div className="empty-content">
            No {entityLabel} was created. Be the first! :)
        </div>
    );
}

export default EmptyContent;
