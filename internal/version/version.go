// Package version contains NCSC-Sense version information.
package version

import (
	"fmt"
	"runtime"
)

// These are set by the linker.  Unfortunately we cannot set constants during
// linking, and Go doesn't have a concept of immutable variables, so to be
// thorough we have to only export them through getters.
//
// TODO(a.garipov): Find out if we can get GOARM and GOMIPS values the same way
// we can GOARCH and GOOS.
var (
	channel string = ChannelDevelopment
	goarm   string
	gomips  string
	version string
)

// Channel constants.
const (
	ChannelDevelopment = "development"
	ChannelEdge        = "edge"
	ChannelBeta        = "beta"
	ChannelRelease     = "release"
)

// Channel returns the current NCSC-Sense release channel.
func Channel() (v string) {
	return channel
}

// Full returns the full current version of NCSC-Sense.
func Full() (v string) {
	msg := "NCSC-Sense, version %s, channel %s, arch %s %s"
	if goarm != "" {
		msg = msg + " v" + goarm
	} else if gomips != "" {
		msg = msg + " " + gomips
	}

	return fmt.Sprintf(msg, version, channel, runtime.GOOS, runtime.GOARCH)
}

// GOARM returns the GOARM value used to build the current NCSC-Sense release.
func GOARM() (v string) {
	return goarm
}

// GOMIPS returns the GOMIPS value used to build the current NCSC-Sense
// release.
func GOMIPS() (v string) {
	return gomips
}

// Version returns the NCSC-Sense build version.
func Version() (v string) {
	return version
}
