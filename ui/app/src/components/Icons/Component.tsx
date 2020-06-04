/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function Component(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.0104 22.2968H16.5141C17.0032 22.2968 17.4722 22.1025 17.8181 21.7567C18.1639 21.4109 18.3582 20.9418 18.3582 20.4527V16.7646H19.7412C20.3526 16.7646 20.9389 16.5217 21.3712 16.0894C21.8034 15.6572 22.0463 15.0709 22.0463 14.4595C22.0463 13.8482 21.8034 13.2619 21.3712 12.8296C20.9389 12.3973 20.3526 12.1544 19.7412 12.1544H18.3582V8.46629C18.3582 7.44283 17.5283 6.62222 16.5141 6.62222H12.826V5.23917C12.826 4.62782 12.5831 4.04151 12.1508 3.60923C11.7185 3.17694 11.1322 2.93408 10.5209 2.93408C9.90954 2.93408 9.32323 3.17694 8.89094 3.60923C8.45865 4.04151 8.2158 4.62782 8.2158 5.23917V6.62222H4.52766C4.03858 6.62222 3.56954 6.8165 3.22371 7.16233C2.87788 7.50816 2.68359 7.97721 2.68359 8.46629V11.97H4.06664C5.4497 11.97 6.55614 13.0765 6.55614 14.4595C6.55614 15.8426 5.4497 16.949 4.06664 16.949H2.68359V20.4527C2.68359 20.9418 2.87788 21.4109 3.22371 21.7567C3.56954 22.1025 4.03858 22.2968 4.52766 22.2968H8.03139V20.9137C8.03139 19.5307 9.13783 18.4243 10.5209 18.4243C11.9039 18.4243 13.0104 19.5307 13.0104 20.9137V22.2968ZM17.3582 13.1544H19.7412C20.0874 13.1544 20.4193 13.2919 20.6641 13.5367C20.9088 13.7814 21.0463 14.1134 21.0463 14.4595C21.0463 14.8056 20.9088 15.1376 20.6641 15.3823C20.4193 15.6271 20.0874 15.7646 19.7412 15.7646H17.3582V20.4527C17.3582 20.6766 17.2692 20.8913 17.1109 21.0496C16.9527 21.2079 16.738 21.2968 16.5141 21.2968H14.0104V20.9137C14.0104 18.9784 12.4562 17.4243 10.5209 17.4243C8.58555 17.4243 7.03139 18.9784 7.03139 20.9137V21.2968H4.52766C4.3038 21.2968 4.08911 21.2079 3.93082 21.0496C3.77252 20.8913 3.68359 20.6766 3.68359 20.4527V17.949H4.06664C6.00198 17.949 7.55614 16.3948 7.55614 14.4595C7.55614 12.5242 6.00198 10.97 4.06664 10.97H3.68359V8.46629C3.68359 8.24242 3.77252 8.02773 3.93082 7.86944C4.08911 7.71115 4.3038 7.62222 4.52766 7.62222H9.2158V5.23917C9.2158 4.89304 9.3533 4.56108 9.59805 4.31633C9.8428 4.07158 10.1748 3.93408 10.5209 3.93408C10.867 3.93408 11.199 4.07158 11.4437 4.31633C11.6885 4.56108 11.826 4.89304 11.826 5.23917V7.62222H16.5141C16.9793 7.62222 17.3582 7.99837 17.3582 8.46629V13.1544Z"/>
    </SvgIcon>
  );
}
