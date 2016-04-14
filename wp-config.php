<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'pethaven');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'qp05ofilterZ!@');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Aitm6WMk!lFo=H;/U_pIo/ ?p!r|bz2{m0YEF;`t&s|8gxqQ=+-QnHII7<Nd{=@_');
define('SECURE_AUTH_KEY',  'TB+3+t)O<+kg.E:*b-[INgZuBq5:vJez%Q+ ]z2X>,wumAJ{@N=/DO#CSD*.]eXA');
define('LOGGED_IN_KEY',    'XPo+eo^SR?)Pd/;e^| }6[5$9quuG[+glj4d]:HN/36UDb<FMw[xr=mXzr5lq6<W');
define('NONCE_KEY',        '=%ve{s&jAj,G;}Wn]ZfDUQ,kceklUN;+Myp-vnre:(9#Y+1-P%Sb+PrP#bE.hDQp');
define('AUTH_SALT',        '-AP[Q[A}$SyaGhA ?|l?]oA=E>h2eqSewhDM`~G9;4q~<UZ4i/@BM*JMZc8L_`]o');
define('SECURE_AUTH_SALT', '0RN,IORFn-SN$E))[#HajJGU4]:wD~OP.{Dm2/dP&%0>t4W{BMH%oz,V)TjeTQ0_');
define('LOGGED_IN_SALT',   'Is67M|:N+_qI,`Ag~8,:(0&gp545~r%[I836TB+r{tm(Xjdm|I}tE$k6$=U%YMR^');
define('NONCE_SALT',       '`*+l5ixFIE%,w$bN|[Jmjq;yJ -O{ui^L[k3{rz%7A)DtxgmU(y/m}nz_`I+ph8-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/content' );

if(isset($_SERVER['HTTP_HOST'])) {
	define( 'WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/content' );
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
