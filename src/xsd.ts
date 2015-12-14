// This file is part of fast-xml, copyright (c) 2015 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import {Cache} from 'cget';
import {Namespace} from './xsd/Namespace';

Cache.patchRequest();

Namespace.register('http://www.w3.org/2001/XMLSchema', 'http://www.w3.org/2009/XMLSchema/XMLSchema.xsd', 'xsd');
Namespace.register('http://www.w3.org/XML/1998/namespace', 'http://www.w3.org/2001/xml.xsd', 'xml');

Namespace.register(null, process.argv[2]).importSchema({
	forceHost: '127.0.0.1',
	forcePort: 12345
});
