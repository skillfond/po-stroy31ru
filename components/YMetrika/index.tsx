import * as React from 'react';
import { YMInitializer } from 'react-yandex-metrika';
 
const YMetrika = () => {
    return (
      <div>
          <YMInitializer accounts={[88039805]} options={{
                webvisor: true, 
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                trackHash: true
              }} 
            />
      </div>
    )
}

export default YMetrika